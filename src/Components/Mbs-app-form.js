import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mbs-app-form.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";
import Recaptcha from 'react-google-invisible-recaptcha';
import {sendMbsForm} from '../DataService/MbsForm';
import DatePicker from "react-datepicker";



class Forms extends React.Component {
    constructor() {
        super();
        this.state = {
            // personal details
          personalFirstName: "",
          personalMiddleName: "",
          personalLastName: "",
          personalGender: null,
          personalDateOfBirth : "",
          personalAddress : "",
          personalAge:"",
          personalPincode :"",
          personalEmail : "",
          personalResidentialNumber:"",
          personalClinicNumber:"",
          personalContactNo:"",
          personalAlternateNumber:"",  
            //nominee details
          nomineeFirstName:"",
          nomineeMiddleName:"",
          nomineeLastName:"",
          relationWithNominee:"",
          nomineeContactNo:"",
          nomineeAlternateNo: "", 
          nomineeAddress:"", 
          nomineePincode: "",  
            //qualification details
          collegeName:"",
          degree:"",
          facultyName:"",
          yearOfPassing:"",  
          //registration and membership details
          registrationNumber:null,
          yearOfRegistration:null,
          regMedicalCouncilBoard:null,
          membershipType:"",
          membershipNumber:null,
          dateOfEnrollment:"",
          //uploads
          birthCertificate:null,
          birthCertificateName:"",
          degreeCertificate:null,
          degreeCertificateName:"",
          registrationCertificate:null,
          registrationCertificateName:"",
          nimaLifeCertificate :null,
          nimaLifeCertificateName:"",
          marriageCertificate:null,  
          marriageCertificateName:"",
          fileUploadState:"",
        };
        this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleDateChange = this.handleDateChange.bind(this);
       this.range = this.range.bind(this);
       this.handleEnrollDateChange = this.handleEnrollDateChange.bind(this)
      }

      handleDateChange(d){
          this.setState({personalDateOfBirth:d})
      }

      handleEnrollDateChange(d){
          this.setState({dateOfEnrollment:d})
      }

      handleChange(e) {
        this.setState({ 
          [e.target.name]: e.target.value });
      }

      onResolved=()=>{
        this.setState({messageSent: true});
      }

    handleSubmit(e) {
        e.preventDefault();
        this.recaptcha.execute();
        var formData = new FormData(e.target);
        const data = new FormData();
        data.append("personalFirstName",this.state.personalFirstName)
        console.log(this.state)
        data.append("personalMiddleName",this.state.personalMiddleName)
        data.append("personalLastName",this.state.personalLastName)
        data.append("personalGender",this.state.personalGender)
        data.append("personalDateOfBirth",this.personalDateOfBirth)
        data.append("personalAddress",this.state.personalAddress)
        data.append("personalAge",this.state.personalAge)
        data.append("personalPincode",this.state.personalPincode)
        data.append("personalEmail",this.state.personalEmail)
        data.append("personalResidentialNumber",this.state.personalResidentialNumber)
        data.append("personalClinicNumber",this.state.personalClinicNumber)
        data.append("personalContactNo",this.state.personalContactNo)
        data.append("personalAlternateNumber",this.state.personalAlternateNumber)
        data.append("nomineeFirstName",this.state.nomineeFirstName)
        data.append("nomineeMiddleName",this.state.nomineeMiddleName)
        data.append("nomineeLastName",this.state.nomineeLastName)
         data.append("relationWithNominee",this.state.relationWithNominee)
        data.append("nomineeContactNo",this.state.nomineeContactNo)
        data.append("nomineeAlternateNo",this.state.nomineeAlternateNo)
        data.append("nomineeAddress",this.state.nomineeAddress)
        data.append("nomineePincode",this.state.nomineePincode)
        data.append("collegeName",this.state.collegeName)
        data.append("degree",this.state.degree)
        data.append("facultyName",this.state.facultyName)
        data.append("registrationNumber",this.state.registrationNumber)
        data.append("yearOfRegistration",this.state.yearOfRegistration)
        data.append("regMedicalCouncilBoard",this.state.regMedicalCouncilBoard)
        data.append("membershipType",this.state. membershipType)
        data.append("membershipNumber",this.state.membershipNumber)
        data.append("dateOfEnrollment",this.state.dateOfEnrollment)
        data.append("yearOfPassing",this.state.yearOfPassing)        
        data.append('birthCertificate',this.state.birthCertificate)
        data.append('degreeCertificate',this.state.degreeCertificate)
        data.append('registrationCertificate',this.state.registrationCertificate)
        data.append('nimaLifeCertificate',this.state. nimaLifeCertificate)
        data.append('marriageCertificate',this.state.marriageCertificate)
        
       console.log(data);
        sendMbsForm(data)
        .then((response)=>{console.log(response)})
        .catch((err) => {
          console.log(err);
        });
      }


    // for handling file upload ----------
    
    //birthcertificates
    fileUploadbirthCertificate = () => {
        document.getElementById('birthCertificate').click();
        document.getElementById('birthCertificate').onchange = () => {
            console.log("file received",document.getElementById('birthCertificate').files[0])
            this.setState({
                birthCertificate: document.getElementById('birthCertificate').files[0],
                birthCertificateName:document.getElementById('birthCertificate').files[0].name
            });
        }
    }
    //degreeCertificate
    fileUploaddegreeCertificate = () => {
        document.getElementById('degreeCertificate').click();
        document.getElementById('degreeCertificate').onchange = () => {
            this.setState({
                degreeCertificate: document.getElementById('degreeCertificate').files[0],
                degreeCertificateName:document.getElementById('degreeCertificate').files[0].name
            });
        }
    }
    //registrationCertificate
    fileUploadregistrationCertificate = () => {
        document.getElementById('registrationCertificate').click();
        document.getElementById('registrationCertificate').onchange = () => {
            this.setState({
                registrationCertificate: document.getElementById('registrationCertificate').files[0],
                registrationCertificateName:document.getElementById('registrationCertificate').files[0].name
            });
        }
    }
    //nimaLifeCertificate
    fileUploadnimaLifeCertificate= () => {
        document.getElementById('nimaLifeCertificate').click();
        document.getElementById('nimaLifeCertificate').onchange = () => {
            this.setState({
                nimaLifeCertificate: document.getElementById('nimaLifeCertificate').files[0],
                nimaLifeCertificateName:document.getElementById('nimaLifeCertificate').files[0].name
            });
        }
    }
    //marriageCertificate
    fileUploadmarriageCertificate = () => {
        document.getElementById('marriageCertificate').click();
        document.getElementById('marriageCertificate').onchange = () => {
            this.setState({
                marriageCertificate: document.getElementById('marriageCertificate').files[0],
                marriageCertificateName:document.getElementById('marriageCertificate').files[0].name
            });
        }
    }

    range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    
    render() {

      var d = new Date();  
      const years = this.range(1940, 2021);
      console.log("range",years)
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
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
                        <input required type="text" 
                        className="form-control" 
                        onChange={this.handleChange}
                        title="*ENTER CHARACTER VALUES ONLY"  
                        pattern="[A-Za-z]{1,32}" 
                        name="personalFirstName" id="personalFirstName"  
                        
                        placeholder=" "/>
                        
                        <span>First Name</span>    
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-12">
                        <input required type="text" className="form-control" onChange={this.handleChange} title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" 
                        name="personalMiddleName" id="personalMiddleName" placeholder=" " />
                        <span>Middle Name</span>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-12">
                        <input required type="text" className="form-control" onChange={this.handleChange} title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" 
                        name="personalLastName"  id="personalLastName" placeholder=" " />
                        <span>Last Name</span>
                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <select required class="form-control" id="personalGender" onChange={this.handleChange} name="personalGender">
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        {/* <input required type="date" onChange={this.handleChange} name="personalDateOfBirth" id="personalDateOfBirth" placeholder="dd-mm-yyyy" className="form-control Mbs-app-form_dob date-picker" />
                        <span>Date of Birth</span> */}
                            {/* <DatePicker
                                selected={this.state.personalDateOfBirth}
                               // onSelect={handleDateSelect} //when day is clicked
                                onChange={this.handleDateChange} //only when value has changed
                            /> */}
                            
                            <DatePicker
                                renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled
                                }) => (
                                    <div
                                        style={{
                                            margin: 10,
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                            {"<"}
                                        </button>
                                        <select
                                            value={d.getYear(date)}
                                            onChange={({ target: { value } }) => changeYear(value)}
                                        >
                                            {years.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[d.getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                                changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                            {">"}
                                        </button>
                                    </div>
                                )}
                               
                                selected={this.state.personalDateOfBirth}
                                onChange={this.handleDateChange}
                                className="personalDOB"
                                placeholderText="Date of Birth"
                            > 
                            </DatePicker>

                    </div>
                    <div className="col-md-2 col-sm-3 col-xs-12">
                        <select required class="form-control" name="personalAge" id="personalAge" onChange={this.handleChange} id="age">
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
                        <textarea required name="personalAddress" id="personalAddress" onChange={this.handleChange} className="form-control address" aria-label="With textarea" placeholder=" "></textarea>
                        <span>Address</span> 
                        </div>
                        <div className="col-xs-12 col-sm-2">
                        <label for="pincode">PIN code:</label>
                        <input required name="personalPincode" id="personalPincode" type="text" onChange={this.handleChange} title="Pin Code should be of 6 digits" pattern="[0-9]{6}" maxlength="6" minLength="6" className="form-control" />
                        </div>
                    </div>

                    <div className="form-row Mbs-app-form_pd-3">
                    <div className="col-sm-4 col-xs-12 ">
                        <input required type="email" name="personalEmail" id="personalEmail" onChange={this.handleChange} title="Should be of form nima@example.com" className="form-control" placeholder=" " />
                        <span>Email</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input require name="personalResidentialNumber" id="personalResidentialNumber" onChange={this.handleChange} title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
                        <span>Residential Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="personalClinicNumber"  id="personalClinicNumber" onChange={this.handleChange} title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
                        <span>Clinic Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="personalContactNo"  id="personalContactNo" onChange={this.handleChange} title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
                        <span>Mobile Number</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="personalAlternateNumber" id="personalAlternateNumber" onChange={this.handleChange} title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" type="tel" className="form-control" placeholder=" " />
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
                        <input required name="nomineeFirstName" id="nomineeFirstName" onChange={this.handleChange} title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>First Name</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="nomineeMiddleName"  id="nomineeMiddleName" onChange={this.handleChange} title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>Middle Name</span> 
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required name="nomineeLastName" id="nomineeLastName" onChange={this.handleChange} title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>Last Name</span> 
                    </div>
                    <div className="col-sm-2 col-xs-12">
                    <input required name="relationWithNominee" id="relationWithNominee" onChange={this.handleChange} title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" type="text" className="form-control" placeholder=" " />
                        <span>Relation with Nominee</span> 
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-sm-2 col-xs-12">
                        <input required name="nomineeContactNo"  id="nomineeContactNo" onChange={this.handleChange} type="tel" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}"  className="form-control" placeholder=" " />
                        <span>Mobile Number</span> 
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <input required name="nomineeAlternateNo"  id="nomineeAlternateNo" onChange={this.handleChange} type="tel" title="Number should be of 10 digits only" pattern="[1-9]{1}[0-9]{9}" className="form-control" placeholder=" " />
                        <span>Alternate Number</span> 
                    </div>
                    </div>

                    <div className="form-row Mbs-app-form_pd-2">
                        <div className="col-xs-12 col-sm-10">
                        <textarea required name="nomineeAddress"  id="nomineeAddress" onChange={this.handleChange} className="form-control address" aria-label="With textarea" placeholder=" "></textarea>
                        <span>Address</span>
                        </div>
                        <div className="col-xs-12 col-sm-2">
                        <label for="pincode">PIN code:</label>
                        <input required name="nomineePincode" id="nomineePincode" onChange={this.handleChange} type="text" title="Pin Code should be of 6 digits" pattern="[0-9]{6}" className="form-control" />
                        </div>
                    </div>
                  
                </div>    

                <div className="Mbs-app-form_qualification-details">
                <div className="Mbs-app-form_form-sub-heading">
                Qualification Details
                </div>
                <div className="form-row Mbs-app-form_pd-1">
                    <div className="col-sm-8 col-xs-12 ">
                        <input required type="text" name="collegeName"  id="collegeName" onChange={this.handleChange} className="form-control" placeholder=" " />
                        <span>College Name</span>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <input required type="text" name="degree" id="degree" onChange={this.handleChange} className="form-control" placeholder=" " />
                        <span>Degree</span>
                    </div>
                </div>
                <div className="form-row Mbs-app-form_pd-2">
                    <div className="col-sm-10 col-xs-12 ">
                        <input required type="text" name="facultyName" id="facultyName" onChange={this.handleChange} className="form-control" placeholder=" " />
                        <span>University/Faculty Name</span>
                    </div>
                    {/* what should be the type                */}
                    <div class="col-sm-2 col-xs-12">
                        <input required type="number" name="yearOfPassing"  id="yearOfPassing" onChange={this.handleChange} className="form-control" placeholder=" " />
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
                        <input required type="number" name="registrationNumber" id="registrationNumber" onChange={this.handleChange} className="form-control" placeholder=" " />
                        <span>Registration Number</span>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required type="text" name="yearOfRegistration" id="yearOfRegistration" onChange={this.handleChange} className="form-control" placeholder=" " />
                        <span>Year of Registration</span>
                    </div>
                    <div class="col-sm-2 col-xs-12">
                        <input required type="text" name="regMedicalCouncilBoard" id="regMedicalCouncilBoard" onChange={this.handleChange}  className="form-control" placeholder=" " />
                        <span style={{fontSize:'0.84rem'}}>Reg.Medical Council Board</span>
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <select class="form-control" name="membershipType" id="membershipType" onChange={this.handleChange}>
                        <option value="" disabled selected hidden>Membership Type</option>
                        <option value="F">Full Time</option>
                        <option value="H">Half Time</option>
                        </select>
                    </div>
                    <div className="col-sm-2 col-xs-12 ">
                        <input required type="number" name="yearOfRegistration" id="yearOfRegistration" onChange={this.handleChange} className="form-control" placeholder=" " />
                        <span>Membership Number</span>
                    </div>
                    {/* date is not coming on placeholder */}
                    <div className="col-sm-2 col-xs-12">
                        {/* <input required type="date" name="dateOfEnrollment" id="dateOfEnrollment" onChange={this.handleChange}  className="form-control date-picker" placeholder="dd-mm-yyyy"/>
                        <span>Date of Enrollment</span> */}
                         <DatePicker
                                renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled
                                }) => (
                                    <div
                                        style={{
                                            margin: 10,
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                            {"<"}
                                        </button>
                                        <select
                                            value={d.getYear(date)}
                                            onChange={({ target: { value } }) => changeYear(value)}
                                        >
                                            {years.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[d.getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                                changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                            {">"}
                                        </button>
                                    </div>
                                )}
                               
                                selected={this.state.dateOfEnrollment}
                                onChange={this.handleEnrollDateChange}
                                className="personalDOB"
                                placeholderText="Date of Enrollment"
                            > 
                            </DatePicker>

                    </div>
                    </div>     
                </div>      

    {/* UPLOAD Documents section */}
                <div className="Mbs-app-form_upload-documents">
                    <div className="Mbs-app-form_form-sub-heading">
                        Upload Documents
                    </div>           
                    <div className="form-row upload">
                    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
                    {/* the above link should be included in index.html for icons */}
                    <div>
                        <input id="birthCertificate" type="file" hidden />
                        <button class="btn Mbs-app-form_btno" type="button" onClick={this.fileUploadbirthCertificate}> Birth Certificate <i className="fa fa-upload"></i></button>
                        {/* {this.state.birthCertificate != null &&
                            this.state.birthCertificateName
                        } */}
                    </div>
                    
                    <div>
                        <input id="degreeCertificate" type="file" hidden />
                        <button class="btn Mbs-app-form_btno" type="button" onClick={this.fileUploaddegreeCertificate}> Degree/Diploma Certificate <i className="fa fa-upload"></i></button>
                        {/* {this.state.degreeCertificate != null &&
                            this.state.degreeCertificate
                        } */}
                    </div>
                    
                    <div>
                    <input id="registrationCertificate" type="file" hidden />
                    <button class="btn Mbs-app-form_btno" type="button" onClick={this.fileUploadregistrationCertificate}>Registration Certificate<i className="fa fa-upload"></i></button>
                    {/* {this.state.registrationCertificate != null &&
                            this.state.registrationCertificateName
                        } */}
                    </div>

                    <div>
                    <input id="nimaLifeCertificate" type="file" hidden />
                    <button class="btn Mbs-app-form_btno" type="button" onClick={this.fileUploadnimaLifeCertificate}> NIMA life Certificate<i className="fa fa-upload"></i> </button>
                    {/* {this.state.nimaLifeCertificate != null &&
                            this.state.nimaLifeCertificateName
                        } */}
                    </div>
                    
                    <div>
                    <input id="marriageCertificate" type="file" hidden />
                    <button class="btn Mbs-app-form_btno" type="button" onClick={this.fileUploadmarriageCertificate}> Marriage Certificate<i className="fa fa-upload"></i></button>
                    {/* {this.state.marriageCertificate != null &&
                            this.state.marriageCertificateName
                        } */}
                    </div>
                    </div> 
                </div>

                <div className="Mbs-app-form_submit">
                    <button class="btn Mbs-app-form_view-form">View Form</button>
                    <button type="submit" class="btn btn-success"> Submit</button>
                </div>
            <br/>
            <Recaptcha
              ref={ref=>this.recaptcha=ref}
              sitekey="6LcS8U0aAAAAAGaOUd9LRVKHnhDBzShPHgZ8gErf"
              onResolved={this.onResolved}
              />
            </form>
        </div>
    )
}
}


export default Forms
