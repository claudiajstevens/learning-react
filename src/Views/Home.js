import React from 'react'
import HelloWorld from '../Components/HelloWord'

function Home(){
    return(
        <div>
            <h1 className="font-bold text=2xl">This is the home page</h1>
            <HelloWorld name="Claudia" />
        </div>
    )
}

export default Home

