import React from 'react'
import CardGrid from '../components/Cards/CardGrid'
import Navbar from '../components/Navbar/Navbar'

const Products = () => {
    return (
        <>
         
            <Navbar/>
            <div className= "container mt-5">
             <CardGrid/>
            </div>
        </>
    )
}

export default Products
