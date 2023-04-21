import React from "react";

function Form(props) {
   return (
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div className="row mb-3">
                  <div className="col-lg-12">
                     <h1><i class="bi bi-person-circle"></i> Basic User Information</h1>
                     <hr />
                  </div>
               </div>
               <div className="row mb-5">
                  <div className="col-lg-6 text-start">
                     <label>First Name</label>
                     <input type="text" name="firstName" className="form-control" value={props.user.firstName} onChange={props.handleInputChange} />
                  </div>
                  <div className="col-lg-6 text-start">
                     <label>Last Name</label>
                     <input type="text" name="lastName" className="form-control" value={props.user.lastName} onChange={props.handleInputChange} />
                  </div>
               </div>
               <div className="row mb-5">
                  <div className="col-lg-6 text-start">
                     <label>Email</label>
                     <input type="email" name="email" className="form-control" value={props.user.email} onChange={props.handleInputChange} />
                  </div>
                  <div className="col-lg-6 text-start">
                     <label>Mobile No</label>
                     <input type="number" name="mobile" className="form-control" value={props.user.mobile} onChange={props.handleInputChange} />
                  </div>
               </div>
               <div className="row mb-5">
                  <div className="col-lg-6 text-start">
                     <label>Address</label>
                     <input type="textarea" name="address" className="form-control" value={props.user.address} onChange={props.handleInputChange} />
                  </div>
                  <div className="col-lg-6 text-start">
                     <label>Country</label>
                     <input type="text" name="country" className="form-control" value={props.user.country} onChange={props.handleInputChange} />
                  </div>
               </div>

               <div className="col-lg-6 text-start">
                  <label>Hobbies</label>
                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="music" name="hobby" id="defaultCheck1" onChange={props.handleInputChange} />
                     <label class="form-check-label" for="defaultCheck1"> Music</label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="dancing" name="hobby" id="defaultCheck1" onChange={props.handleInputChange} />
                     <label class="form-check-label" for="defaultCheck1"> Dancing </label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="cooking" name="hobby" id="defaultCheck1" onChange={props.handleInputChange} />
                     <label class="form-check-label" for="defaultCheck1"> Cooking </label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="sports" name="hobby" id="defaultCheck1" onChange={props.handleInputChange} />
                     <label class="form-check-label" for="defaultCheck1"> Sports </label>
                  </div>
               </div>
               <div className="row mt-5">
                  <div className="col-lg-12">
                     <button className="btn btn-light w-100" onClick={props.handleSubmit}>{props.buttonText}</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Form;