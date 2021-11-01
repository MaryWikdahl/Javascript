import React from 'react'

const Customer = ({item}) => {
    return (
        <div>
         <div className="card mb-3" style={{maxwidth: 540 + 'px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.firstName},{item.lastName}</h5>
        <p className="card-text">{item.email}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>   
</div>
    )
}

export default Customer
