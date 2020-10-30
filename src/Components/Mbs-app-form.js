import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mbs-app-form.css'


function Forms() {
    return (
        <div className="container Mbs-app-form_container">
            <div className="row">   
            <div className="col-sm-2">
            <span class="Mbs-app-form_dot"></span>
            </div>
            <div className="col-sm-10">
            <div className="Mbs-app-form_main-heading">
                NIMA Mutual Benifits Scheme Application Form
            </div>
            <hr/>
            <div className="Mbs-app-form_main-address">
                4140 Parker Rd. Allentown, New Mexico 31134
            </div>
            </div>
            </div>
            <form>
                <div className="Mbs-app-form_personal-details">
                    <div className="Mbs-app-form_form-sub-heading">
                     Personal Details
                    </div>
                    <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-sm-2 col-xs-12 ">
                        <input type="text" className="form-control"  name="fname" id="fname"  placeholder=" "/>
                        <span>First Name</span>    
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="text" className="form-control" name="mname" id="mname" placeholder=" " />
                        <span>Middle Name</span>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="text" className="form-control" name="lname" id="lname" placeholder=" " />
                        <span>Last Name</span>
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <select class="form-control" id="gender">
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        </select>
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-sm-2 col-xs-12">
                        <input type="date" className="form-control" />
                        <span>Date of Birth</span>
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <select class="form-control" id="age">
                        <option value="" disabled selected hidden>Age</option>
                        <option value="A">1-6</option>
                        <option value="B">6-12</option>
                        <option value="C">12-18</option>
                        <option value="D">18-25</option>
                        <option value="E">Above 25</option>
                        </select>
                    </div>
                    </div>

                    <div className="form-row Mbs-app-form_pd-2">
                        <div className="col-xs-12 col-sm-10">
                        <textarea className="form-control address" aria-label="With textarea" placeholder=" "></textarea>
                        <span>Address</span> 
                        </div>
                        <div className="col-xs-12 col-sm-2">
                        <label for="pincode">PIN code:</label>
                        <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-row Mbs-app-form_pd-3">
                    <div className="col-sm-4 col-xs-12 ">
                        <input type="email" className="form-control" placeholder=" " />
                        <span>Email</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="tel" className="form-control" placeholder=" " />
                        <span>Residential Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="tel" className="form-control" placeholder=" " />
                        <span>Clinic Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="tel" className="form-control" placeholder=" " />
                        <span>Mobile Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="tel" className="form-control" placeholder=" " />
                        <span>Alternate Number</span> 
                    </div>
                    </div>
                </div>
                    
                <div className="Mbs-app-form_nominee-details">
                    <div className="Mbs-app-form_form-sub-heading">
                        Nominee Details
                    </div>
                    <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-sm-2 col-xs-12 ">
                        <input type="text" className="form-control" placeholder=" " />
                        <span>First Name</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="text" className="form-control" placeholder=" " />
                        <span>Middle Name</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="text" className="form-control" placeholder=" " />
                        <span>Last Name</span> 
                    </div>
                    <div className="col-sm-2 col-xs-12">
                    <input type="text" className="form-control" placeholder=" " />
                        <span>Relation with Nominee</span> 
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-sm-2 col-xs-12">
                        <input type="tel" className="form-control" placeholder=" " />
                        <span>Mobile Number</span> 
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <input type="tel" className="form-control" placeholder=" " />
                        <span>Alternate Number</span> 
                    </div>
                    </div>

                    <div className="form-row Mbs-app-form_pd-2">
                        <div className="col-xs-12 col-sm-10">
                        <textarea className="form-control address" aria-label="With textarea" placeholder=" "></textarea>
                        <span>Address</span>
                        </div>
                        <div className="col-xs-12 col-sm-2">
                        <label for="pincode">PIN code:</label>
                        <input type="text" className="form-control" />
                        </div>
                    </div>
                  
                </div>    

                <div className="Mbs-app-form_qualification-details">
                <div className="Mbs-app-form_form-sub-heading">
                Qualification Details
                </div>
                <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-sm-8 col-xs-12 ">
                        <input type="text" className="form-control" placeholder=" " />
                        <span>College Name</span>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <input type="text" className="form-control" placeholder=" " />
                        <span>Degree</span>
                    </div>
                </div>
                <div className="form-row Mbs-app-form_pd-2">
                    <div className="col-sm-10 col-xs-12 ">
                        <input type="text" className="form-control" placeholder=" " />
                        <span>University/Faculty Name</span>
                    </div>
                    {/* what should be the type                */}
                    <div class="col-sm-2 col-xs-12">
                        <input type="number" className="form-control" placeholder=" " />
                        <span>Year of Passing</span>
                    </div>
                </div>
                </div> 

                <div className="Mbs-app-form_registration-and-membership-details">
                <div className="Mbs-app-form_form-sub-heading">
                Registration and Membership Details
                </div>
                <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-sm-2 col-xs-12 ">
                        <input type="number" className="form-control" placeholder=" " />
                        <span>Registration Number</span>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="text"   className="form-control" placeholder=" " />
                        <span>Year of Registration</span>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input type="text"   className="form-control" placeholder=" " />
                        <span style={{fontSize:'0.84rem'}}>Reg.Medical Council Board</span>
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <select class="form-control" id="membership-type">
                        <option value="" disabled selected hidden>Membership Type</option>
                        <option value="F">Full Time</option>
                        <option value="H">Half Time</option>
                        </select>
                    </div>
                    <div className="col-sm-2 col-xs-12 ">
                        <input type="number" className="form-control" placeholder=" " />
                        <span>Membership Number</span>
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-sm-2 col-xs-12">
                        <input type="date" className="form-control" />
                        <span>Date of Birth</span>
                    </div>
                    </div>     
                </div>      

                <div className="Mbs-app-form_upload-documents">
                    <div className="Mbs-app-form_form-sub-heading">
                        Upload Documents
                    </div>           
                    <div className="form-row upload">
                    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
                    {/* the above link should be included in index.html for icons */}
                    <button class="btn Mbs-app-form_btno"><i class="fa fa-upload"></i> Birth Certificate</button>
                    <button class="btn Mbs-app-form_btno"><i class="fa fa-upload"></i> Degree/Diploma Certificate</button>
                    <button class="btn Mbs-app-form_btno"><i class="fa fa-upload"></i> Registration Certificate</button>
                    <button class="btn Mbs-app-form_btno"><i class="fa fa-upload"></i> NIMA life Certificate</button>
                    <button class="btn Mbs-app-form_btno"><i class="fa fa-upload"></i> Marriage Certificate</button>
                    </div> 
                </div>

                <div className="Mbs-app-form_submit">
                    <button class="btn Mbs-app-form_view-form">View Form</button>
                    <button type="submit" class="btn btn-success"> Submit</button>
                </div>
            <br/>
            </form>
        </div>
    )
}


export default Forms
