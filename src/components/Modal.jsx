import React from 'react';

const Modal = (props) => {
    const data = props.viewData;
    return (
        <div  className="text-dark" >
            <div className="modal d-block text-dark" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">View Page</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.handleClose()}></button>
      </div>
      <div className="modal-body">
      <ul>
        <li>
        <h5> Name : {data.firstName + " " + data.lastName}</h5> 
        </li>
        <li>
       <h5> Email : {data.email} </h5>  
        </li>
        <li>
        <h5> Mobile : {data.mobile}</h5>  
        </li>
        <li>
         <h5> Address : {data.address}</h5>
        </li>
        <li>
        <h5> Country : {data.country}</h5>
        </li>
        {/* <li>
        <h5> Hobbies : {data.userinfo}</h5>
        </li> */}

      </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" onClick={() => props.handleClose()} data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Modal;
