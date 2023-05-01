import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product(){
    //useParams hook allows us to addes the parameters in the url
    const { id } = useParams()

    //added the {id} variable to be able to access whatever id is in the url
    //since variable was added to url it must be surrounded by back ticks '`'
    //instead of single or double quotes
    const url = `https://64503acfb61a9f0c4d351361.mockapi.io/products/${id}`
    const [product, setProduct] = useState(null)

    let content = null
    //need to use axios function in the useEffect hook or
    //it will just endlessly run requests
    //
    //useEffect takes in two arguments:
        //function of code we want to run
        //variable we want to monitor to see if it changes
            //if it does change rerun the function
    useEffect(() => {
        //use axios to GET the url
        //that returns a promise
        //we can chain on a 'then' function
            //then function returns a responce from that request
                //run a function on the responce that will set a variable
        axios.get(url)
            .then(response => {
                setProduct(response.data)
        })
    }, [url])

    //since product starts out as null we need to check if
    //product has a name first so it does not cause an error
    if(product){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.name}
            </h1>
            <div>
                <img
                    src={product.images[0].imageUrl}
                    alt={product.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.price}
            </div>
            <div>
                {product.description}
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