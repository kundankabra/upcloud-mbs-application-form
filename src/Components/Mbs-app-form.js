import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mbs-app-form.css'


class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fname: "",
          mname: "",
          lname: "",
          gender: null,
          dob: "",
          altNum: "",
          address: "",
          acadQual: "",
          examBody: "",
          yearPass: "",
          regNum: "",
          dateReg: "",
          nameofBoard: "",
          practitioner: null,
          scientificPub: null,
          titleofPaper: "",
          nimaBefore: null,
          branch: null,
          reasonDiscontinue: ""
    
    
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
      }

      handleSubmit(e) {
        e.preventDefault();
        const { altNum }= this.state.altNum;
        if(altNum=="")
        {
          document.getElementById("messages").innerHTML="**PLEASE FILL MOBILE NO.";
          return false;
        }
        if(isNaN(altNum))
        {
          document.getElementById("messages").innerHTML="**ENTER NUMERIC VALUES ONLY";
          return false;
        }
        if(altNum.length<10)
        {
          document.getElementById("messages").innerHTML="**MOBILE NO. MUST HABE 10 DIGITS ONLY";
          return false;
        }
        
        if(altNum.length>10)
        {
          document.getElementById("messages").innerHTML="**MOBILE NO. MUST HAVE 10 DIGITS ONLY";
          return false;
        }
        
    
        const { fname }= this.state.fname;
        const { mname }= this.state.mname;
        const { lname }= this.state.lname;
        if(!isNaN(fname))
        {
          document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY";
          return false;
        }
        if(!isNaN(mname))
        {
          document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY";
          return false;
        }
        if(!isNaN(lname))
        {
          document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY";
          return false;
        }
        console.log(this.state);
      }
    
    
    render() {
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
            {/* form starts from here */}
            <form onSubmit={this.handleSubmit}>
                <div className="Mbs-app-form_personal-details">
                    <div className="Mbs-app-form_form-sub-heading">
                     Personal Details
                    </div>
                    <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-md-2 col-sm-3 col-xs-12 ">
                        <input required type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY"  pattern="[A-Za-z]{1,32}" name="fname" id="fname"  placeholder=" "/>
                        <span>First Name</span>    
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-12">
                        <input required type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="mname" id="mname" placeholder=" " />
                        <span>Middle Name</span>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-12">
                        <input required type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="lname" id="lname" placeholder=" " />
                        <span>Last Name</span>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <select required class="form-control" id="gender" name="gender">
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        </select>
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <input required type="date" name="dob" className="form-control Mbs-app-form_dob" />
                        <span>Date of Birth</span>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <select required class="form-control" id="age">
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
                        <textarea required name="address" className="form-control address" aria-label="With textarea" placeholder=" "></textarea>
                        <span>Address</span> 
                        </div>
                        <div className="col-xs-12 col-sm-2">
                        <label for="pincode">PIN code:</label>
                        <input required nam="pinCode" type="text" title="Pin Code should be of 6 digits" pattern="[0-9]{6}" maxlength="6" minLength="6" className="form-control" />
                        </div>
                    </div>

                    <div className="form-row Mbs-app-form_pd-3">
                    <div className="col-sm-4 col-xs-12 ">
                        <input required type="email" title="Should be of form nima@example.com" className="form-control" placeholder=" " />
                        <span>Email</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input require name="Num" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
                        <span>Residential Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="altNum" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
                        <span>Clinic Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="altNum" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
                        <span>Mobile Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="altNum" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
                        <span>Alternate Number</span> 
                    </div>
                    </div>
                </div>
                    
                    {/* nominee details section begins from here */}

                <div className="Mbs-app-form_nominee-details">
                    <div className="Mbs-app-form_form-sub-heading">
                        Nominee Details
                    </div>
                    <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-sm-2 col-xs-12 ">
                        <input required name="nom-fname" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>First Name</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="nom-mname" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>Middle Name</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="nom-lname" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>Last Name</span> 
                    </div>
                    <div className="col-sm-2 col-xs-12">
                    <input required name="nom-relation"  title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>Relation with Nominee</span> 
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-sm-2 col-xs-12">
                        <input required name="nom-mobNum" type="tel" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}"  className="form-control" placeholder=" " />
                        <span>Mobile Number</span> 
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <input required name="nom-altNum" type="tel" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" className="form-control" placeholder=" " />
                        <span>Alternate Number</span> 
                    </div>
                    </div>

                    <div className="form-row Mbs-app-form_pd-2">
                        <div className="col-xs-12 col-sm-10">
                        <textarea required name="nom-address" className="form-control address" aria-label="With textarea" placeholder=" "></textarea>
                        <span>Address</span>
                        </div>
                        <div className="col-xs-12 col-sm-2">
                        <label for="pincode">PIN code:</label>
                        <input required name="nom-pinCode" type="text" title="Pin Code should be of 6 digits" pattern="[0-9]{6}" className="form-control" />
                        </div>
                    </div>
                  
                </div>    

                <div className="Mbs-app-form_qualification-details">
                <div className="Mbs-app-form_form-sub-heading">
                Qualification Details
                </div>
                <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-sm-8 col-xs-12 ">
                        <input required type="text" className="form-control" placeholder=" " />
                        <span>College Name</span>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <input required type="text" className="form-control" placeholder=" " />
                        <span>Degree</span>
                    </div>
                </div>
                <div className="form-row Mbs-app-form_pd-2">
                    <div className="col-sm-10 col-xs-12 ">
                        <input required type="text" className="form-control" placeholder=" " />
                        <span>University/Faculty Name</span>
                    </div>
                    {/* what should be the type                */}
                    <div class="col-sm-2 col-xs-12">
                        <input required type="number" className="form-control" placeholder=" " />
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
                        <input required type="number" className="form-control" placeholder=" " />
                        <span>Registration Number</span>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required type="text"   className="form-control" placeholder=" " />
                        <span>Year of Registration</span>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required type="text"   className="form-control" placeholder=" " />
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
                        <input required type="number" className="form-control" placeholder=" " />
                        <span>Membership Number</span>
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-sm-2 col-xs-12">
                        <input required type="date" className="form-control" />
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
}


export default Forms
