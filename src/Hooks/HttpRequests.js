import React, {useEffect, useState} from "react";
import axios from 'axios'


//createing our own hook 
//when creating hook you must start function with 'use_'
export function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        //this will set the loading icon while data is being fetched
        setRequest({
            loading: true,
            data: null,
            error: false
        })

        //use axios to GET the url
        //that returns a promise
        //we can chain on a 'then' function
            //then function returns a responce from that request
                //run a function on the responce that will set a variable
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false,
                })
        })
        //there might be a search for a products that does not exist
        //without catch then loader will just run forever
        //with catch will check if there is an error getting a products
        .catch(() => {
            setRequest({
                loading: false,
                data: null,
                error: true,
            })
        })
    }, [url])

    return request

}

