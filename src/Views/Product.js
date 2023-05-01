import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Product(){
    //useParams hook allows us to addes the parameters in the url
    const { id } = useParams()

    //added the {id} variable to be able to access whatever id is in the url
    //since variable was added to url it must be surrounded by back ticks '`'
    //instead of single or double quotes
    const url = `https://64503acfb61a9f0c4d351361.mockapi.io/products/${id}`
    
    //turning useState variable into an object so we can add
    //loading variable while data is loading
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null
    //need to use axios function in the useEffect hook or
    //it will just endlessly run requests
    //
    //useEffect takes in two arguments:
        //function of code we want to run
        //variable we want to monitor to see if it changes
            //if it does change rerun the function
    useEffect(() => {
        //this will set the loading icon while data is being fetched
        setProduct({
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
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false,
                })
        })
        //there might be a search for a product that does not exist
        //without catch then loader will just run forever
        //with catch will check if there is an error getting a product
        .catch(() => {
            setProduct({
                loading: false,
                data: null,
                error: true,
            })
        })
    }, [url])


    //creating a display if there is an error
    //other posibilites:
        //could report a 404
        //say that product doesn't exist
    if(product.error){
        content = 
            <p>
                There was an error please refresh or try again later
            </p>
    }

    if(product.loading){
        content = <Loader />
    }

    //since product starts out as null we need to check if
    //product has a name first so it does not cause an error
    if(product.data){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return(
        <div>
            {content}
        </div>
    )

}

export default Product