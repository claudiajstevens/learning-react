import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product(){
    //useParams hook allows us to addes the parameters in the url
    const { id } = useParams()

    //added the {id} variable to be able to access whatever id is in the url
    //since variable was added to url it must be surrounded by back ticks '`'
    //instead of single or double quotes
    const url = `https://64503acfb61a9f0c4d351361.mockapi.io/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null



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