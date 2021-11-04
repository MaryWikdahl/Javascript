import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Customer from '../components/Customer';

function Products() {
     const customerr= {
        id:10,
        firstName: "Maja",
        lastName: "Sol",
        email: "maja.sol@hotmail.com"
      }
    
      const [customers, setCustomers]= useState([ ])
      useEffect(()=> {
        async function fetchData(){
        const res = await fetch ("https://ecexam-webapi.azurewebsites.net/api/customers")
        const json = await res.json();
        console.log(json);
        setCustomers([...json, customerr])
        }
        fetchData()
      }, []);
    
        return(
            <div classNameName="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            customers.map( customer=>(
            <div key={customer.id} className="col">
                <Customer item={customer}/>
                </div>
            ))
            
        }
    </div>
   </div>
    )
}

export default Products