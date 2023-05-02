import React, {useState, useEffect } from 'react'
import HelloWorld from '../Components/HelloWord'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home(){
    let content = null
    const url = `https://64503acfb61a9f0c4d351361.mockapi.io/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        //this will set the loading icon while data is being fetched
        setProducts({
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
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false,
                })
        })
        //there might be a search for a products that does not exist
        //without catch then loader will just run forever
        //with catch will check if there is an error getting a products
        .catch(() => {
            setProducts({
                loading: false,
                data: null,
                error: true,
            })
        })
    }, [url])

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

