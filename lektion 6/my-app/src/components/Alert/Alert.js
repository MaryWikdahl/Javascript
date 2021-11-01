// rafce-extension

import React from 'react'
import './Alert';

const Alert = ({title, text}) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
         <i class="fal fa-exclamation-triangle"></i>
         <div className="ms-2 d-inline"> 
        <strong>{title}</strong> {text}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      </div>
    )
}

export default Alert

