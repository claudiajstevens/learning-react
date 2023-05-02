import React, {useState, useEffect } from 'react'
import HelloWorld from '../Components/HelloWord'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    let content = null
    const url = `https://64503acfb61a9f0c4d351361.mockapi.io/products?page=1&limit=10`
    
    let products = useAxiosGet(url)

    if(products.error){
        content = 
            <p>
                There was an error please refresh or try again later
            </p>
    }

    if(products.loading){
        content = <Loader />
    }


    if(products.data){
        content = 
            //product = product name
            //key = index of current product
            products.data.map((product, key) => 
                <div key={product.id}>
                    <ProductCard 
                        product={product}
                    />
                </div>
            )

    }


    return(
        <div>
            <h1 className="font-bold text=2xl">
                Best Sellers
            </h1>

            {content}

            {/* <HelloWorld name="Claudia" /> */}
        </div>
    )
}

export default Home

