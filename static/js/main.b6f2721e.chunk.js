(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{188:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),i=t.n(r);t(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(24),s=t(62),c=t(63),m=t(7),d=t(70),p=t(69),u=(t(77),t(78),t(79),t(64)),h=t.n(u),f=t(25),g=t.n(f),E=t(65),N=t(66),C=t.n(N),b=function(){var e=Object(E.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,C.a.post("https://nimaaaa-project.herokuapp.com/ApplicationForm",a,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),v=t(26),y=t.n(v),M=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).onResolved=function(){e.setState({messageSent:!0})},e.fileUploadbirthCertificate=function(){document.getElementById("birthCertificate").click(),document.getElementById("birthCertificate").onchange=function(){console.log("file received",document.getElementById("birthCertificate").files[0]),e.setState({birthCertificate:document.getElementById("birthCertificate").files[0],birthCertificateName:document.getElementById("birthCertificate").files[0].name})}},e.fileUploaddegreeCertificate=function(){document.getElementById("degreeCertificate").click(),document.getElementById("degreeCertificate").onchange=function(){e.setState({degreeCertificate:document.getElementById("degreeCertificate").files[0],degreeCertificateName:document.getElementById("degreeCertificate").files[0].name})}},e.fileUploadregistrationCertificate=function(){document.getElementById("registrationCertificate").click(),document.getElementById("registrationCertificate").onchange=function(){e.setState({registrationCertificate:document.getElementById("registrationCertificate").files[0],registrationCertificateName:document.getElementById("registrationCertificate").files[0].name})}},e.fileUploadnimaLifeCertificate=function(){document.getElementById("nimaLifeCertificate").click(),document.getElementById("nimaLifeCertificate").onchange=function(){e.setState({nimaLifeCertificate:document.getElementById("nimaLifeCertificate").files[0],nimaLifeCertificateName:document.getElementById("nimaLifeCertificate").files[0].name})}},e.fileUploadmarriageCertificate=function(){document.getElementById("marriageCertificate").click(),document.getElementById("marriageCertificate").onchange=function(){e.setState({marriageCertificate:document.getElementById("marriageCertificate").files[0],marriageCertificateName:document.getElementById("marriageCertificate").files[0].name})}},e.state={personalFirstName:"",personalMiddleName:"",personalLastName:"",personalGender:null,personalDateOfBirth:"",personalAddress:"",personalAge:"",personalPincode:"",personalEmail:"",personalResidentialNumber:"",personalClinicNumber:"",personalContactNo:"",personalAlternateNumber:"",nomineeFirstName:"",nomineeMiddleName:"",nomineeLastName:"",relationWithNominee:"",nomineeContactNo:"",nomineeAlternateNo:"",nomineeAddress:"",nomineePincode:"",collegeName:"",degree:"",facultyName:"",yearOfPassing:"",registrationNumber:null,yearOfRegistration:null,regMedicalCouncilBoard:null,membershipType:"",membershipNumber:null,dateOfEnrollment:"",birthCertificate:null,birthCertificateName:"",degreeCertificate:null,degreeCertificateName:"",registrationCertificate:null,registrationCertificateName:"",nimaLifeCertificate:null,nimaLifeCertificateName:"",marriageCertificate:null,marriageCertificateName:"",fileUploadState:"",selectYear:"2021",selectMonth:"January"},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e.handleDateChange=e.handleDateChange.bind(Object(m.a)(e)),e.range=e.range.bind(Object(m.a)(e)),e.handleEnrollDateChange=e.handleEnrollDateChange.bind(Object(m.a)(e)),e}return Object(c.a)(t,[{key:"handleDateChange",value:function(e){this.setState({personalDateOfBirth:e})}},{key:"handleEnrollDateChange",value:function(e){this.setState({dateOfEnrollment:e})}},{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.recaptcha.execute();new FormData(e.target);var a=new FormData;a.append("personalFirstName",this.state.personalFirstName),console.log(this.state),a.append("personalMiddleName",this.state.personalMiddleName),a.append("personalLastName",this.state.personalLastName),a.append("personalGender",this.state.personalGender),a.append("personalDateOfBirth",this.personalDateOfBirth),a.append("personalAddress",this.state.personalAddress),a.append("personalAge",this.state.personalAge),a.append("personalPincode",this.state.personalPincode),a.append("personalEmail",this.state.personalEmail),a.append("personalResidentialNumber",this.state.personalResidentialNumber),a.append("personalClinicNumber",this.state.personalClinicNumber),a.append("personalContactNo",this.state.personalContactNo),a.append("personalAlternateNumber",this.state.personalAlternateNumber),a.append("nomineeFirstName",this.state.nomineeFirstName),a.append("nomineeMiddleName",this.state.nomineeMiddleName),a.append("nomineeLastName",this.state.nomineeLastName),a.append("relationWithNominee",this.state.relationWithNominee),a.append("nomineeContactNo",this.state.nomineeContactNo),a.append("nomineeAlternateNo",this.state.nomineeAlternateNo),a.append("nomineeAddress",this.state.nomineeAddress),a.append("nomineePincode",this.state.nomineePincode),a.append("collegeName",this.state.collegeName),a.append("degree",this.state.degree),a.append("facultyName",this.state.facultyName),a.append("registrationNumber",this.state.registrationNumber),a.append("yearOfRegistration",this.state.yearOfRegistration),a.append("regMedicalCouncilBoard",this.state.regMedicalCouncilBoard),a.append("membershipType",this.state.membershipType),a.append("membershipNumber",this.state.membershipNumber),a.append("dateOfEnrollment",this.state.dateOfEnrollment),a.append("yearOfPassing",this.state.yearOfPassing),a.append("birthCertificate",this.state.birthCertificate),a.append("degreeCertificate",this.state.degreeCertificate),a.append("registrationCertificate",this.state.registrationCertificate),a.append("nimaLifeCertificate",this.state.nimaLifeCertificate),a.append("marriageCertificate",this.state.marriageCertificate),console.log(a),b(a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"range",value:function(e,a){for(var t=[],n=e;n<=a;n++)t.push(n);return t}},{key:"render",value:function(){var e=this,a=(new Date,this.range(1940,2021));console.log("range",a);var t=["January","February","March","April","May","June","July","August","September","October","November","December"];return l.a.createElement("div",{className:"container Mbs-app-form_container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("span",{class:"Mbs-app-form_dot"})),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("div",{className:"Mbs-app-form_main-heading"},"NIMA Mutual Benifits Scheme Application Form"),l.a.createElement("hr",null),l.a.createElement("div",{className:"Mbs-app-form_main-address"},"4140 Parker Rd. Allentown, New Mexico 31134"))),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"Mbs-app-form_personal-details"},l.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Personal Details"),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},l.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12 "},l.a.createElement("input",{required:!0,type:"text",className:"form-control",onChange:this.handleChange,title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"personalFirstName",id:"personalFirstName",placeholder:" "}),l.a.createElement("span",null,"First Name")),l.a.createElement("div",{class:"col-md-2 col-sm-3 col-xs-12"},l.a.createElement("input",{required:!0,type:"text",className:"form-control",onChange:this.handleChange,title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"personalMiddleName",id:"personalMiddleName",placeholder:" "}),l.a.createElement("span",null,"Middle Name")),l.a.createElement("div",{class:"col-md-2 col-sm-3 col-xs-12"},l.a.createElement("input",{required:!0,type:"text",className:"form-control",onChange:this.handleChange,title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"personalLastName",id:"personalLastName",placeholder:" "}),l.a.createElement("span",null,"Last Name")),l.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12"},l.a.createElement("select",{required:!0,class:"form-control",id:"personalGender",onChange:this.handleChange,name:"personalGender"},l.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Gender"),l.a.createElement("option",{value:"male"},"Male"),l.a.createElement("option",{value:"female"},"Female"))),l.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12"},l.a.createElement(y.a,{renderCustomHeader:function(n){n.date;var r=n.changeYear,i=n.changeMonth,o=n.decreaseMonth,s=n.increaseMonth,c=n.prevMonthButtonDisabled,m=n.nextMonthButtonDisabled;return l.a.createElement("div",{style:{margin:10,display:"flex",justifyContent:"center"}},l.a.createElement("button",{onClick:o,disabled:c},"<"),l.a.createElement("select",{value:e.state.selectYear,onChange:function(a){var t=a.target.value;r(t),e.setState({selectYear:t})}},a.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("select",{value:e.state.selectMonth,onChange:function(a){var n=a.target.value;i(t.indexOf(n)),e.setState({selectMonth:n})}},t.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("button",{onClick:s,disabled:m},">"))},selected:this.state.personalDateOfBirth,onChange:this.handleDateChange,className:"personalDOB",placeholderText:"Date of Birth"})),l.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12"},l.a.createElement("select",Object(o.a)({required:!0,class:"form-control",name:"personalAge",id:"personalAge",onChange:this.handleChange},"id","age"),l.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Age"),l.a.createElement("option",{value:"A"},"1-6"),l.a.createElement("option",{value:"B"},"6-12"),l.a.createElement("option",{value:"C"},"12-18"),l.a.createElement("option",{value:"D"},"18-25"),l.a.createElement("option",{value:"E"},"Above 25")))),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-2"},l.a.createElement("div",{className:"col-xs-12 col-sm-10"},l.a.createElement("textarea",{required:!0,name:"personalAddress",id:"personalAddress",onChange:this.handleChange,className:"form-control address","aria-label":"With textarea",placeholder:" "}),l.a.createElement("span",null,"Address")),l.a.createElement("div",{className:"col-xs-12 col-sm-2"},l.a.createElement("label",{for:"pincode"},"PIN code:"),l.a.createElement("input",{required:!0,name:"personalPincode",id:"personalPincode",type:"text",onChange:this.handleChange,title:"Pin Code should be of 6 digits",pattern:"[0-9]{6}",maxlength:"6",minLength:"6",className:"form-control"}))),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-3"},l.a.createElement("div",{className:"col-sm-4 col-xs-12 "},l.a.createElement("input",{required:!0,type:"email",name:"personalEmail",id:"personalEmail",onChange:this.handleChange,title:"Should be of form nima@example.com",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Email")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{require:!0,name:"personalResidentialNumber",id:"personalResidentialNumber",onChange:this.handleChange,title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Residential Number")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"personalClinicNumber",id:"personalClinicNumber",onChange:this.handleChange,title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Clinic Number")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"personalContactNo",id:"personalContactNo",onChange:this.handleChange,title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Mobile Number")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"personalAlternateNumber",id:"personalAlternateNumber",onChange:this.handleChange,title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Alternate Number")))),l.a.createElement("div",{className:"Mbs-app-form_nominee-details"},l.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Nominee Details"),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},l.a.createElement("div",{className:"col-sm-2 col-xs-12 "},l.a.createElement("input",{required:!0,name:"nomineeFirstName",id:"nomineeFirstName",onChange:this.handleChange,title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"First Name")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"nomineeMiddleName",id:"nomineeMiddleName",onChange:this.handleChange,title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Middle Name")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"nomineeLastName",id:"nomineeLastName",onChange:this.handleChange,title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Last Name")),l.a.createElement("div",{className:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"relationWithNominee",id:"relationWithNominee",onChange:this.handleChange,title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Relation with Nominee")),l.a.createElement("div",{className:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"nomineeContactNo",id:"nomineeContactNo",onChange:this.handleChange,type:"tel",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Mobile Number")),l.a.createElement("div",{className:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,name:"nomineeAlternateNo",id:"nomineeAlternateNo",onChange:this.handleChange,type:"tel",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Alternate Number"))),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-2"},l.a.createElement("div",{className:"col-xs-12 col-sm-10"},l.a.createElement("textarea",{required:!0,name:"nomineeAddress",id:"nomineeAddress",onChange:this.handleChange,className:"form-control address","aria-label":"With textarea",placeholder:" "}),l.a.createElement("span",null,"Address")),l.a.createElement("div",{className:"col-xs-12 col-sm-2"},l.a.createElement("label",{for:"pincode"},"PIN code:"),l.a.createElement("input",{required:!0,name:"nomineePincode",id:"nomineePincode",onChange:this.handleChange,type:"text",title:"Pin Code should be of 6 digits",pattern:"[0-9]{6}",className:"form-control"})))),l.a.createElement("div",{className:"Mbs-app-form_qualification-details"},l.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Qualification Details"),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},l.a.createElement("div",{className:"col-sm-8 col-xs-12 "},l.a.createElement("input",{required:!0,type:"text",name:"collegeName",id:"collegeName",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",null,"College Name")),l.a.createElement("div",{class:"col-sm-4 col-xs-12"},l.a.createElement("input",{required:!0,type:"text",name:"degree",id:"degree",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Degree"))),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-2"},l.a.createElement("div",{className:"col-sm-10 col-xs-12 "},l.a.createElement("input",{required:!0,type:"text",name:"facultyName",id:"facultyName",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",null,"University/Faculty Name")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,type:"number",name:"yearOfPassing",id:"yearOfPassing",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Year of Passing")))),l.a.createElement("div",{className:"Mbs-app-form_registration-and-membership-details"},l.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Registration and Membership Details"),l.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},l.a.createElement("div",{className:"col-sm-2 col-xs-12 "},l.a.createElement("input",{required:!0,type:"number",name:"registrationNumber",id:"registrationNumber",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Registration Number")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,type:"text",name:"yearOfRegistration",id:"yearOfRegistration",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Year of Registration")),l.a.createElement("div",{class:"col-sm-2 col-xs-12"},l.a.createElement("input",{required:!0,type:"text",name:"regMedicalCouncilBoard",id:"regMedicalCouncilBoard",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",{style:{fontSize:"0.84rem"}},"Reg.Medical Council Board")),l.a.createElement("div",{className:"col-sm-2 col-xs-12"},l.a.createElement("select",{class:"form-control",name:"membershipType",id:"membershipType",onChange:this.handleChange},l.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Membership Type"),l.a.createElement("option",{value:"F"},"Full Time"),l.a.createElement("option",{value:"H"},"Half Time"))),l.a.createElement("div",{className:"col-sm-2 col-xs-12 "},l.a.createElement("input",{required:!0,type:"number",name:"yearOfRegistration",id:"yearOfRegistration",onChange:this.handleChange,className:"form-control",placeholder:" "}),l.a.createElement("span",null,"Membership Number")),l.a.createElement("div",{className:"col-sm-2 col-xs-12"},l.a.createElement(y.a,{renderCustomHeader:function(n){n.date;var r=n.changeYear,i=n.changeMonth,o=n.decreaseMonth,s=n.increaseMonth,c=n.prevMonthButtonDisabled,m=n.nextMonthButtonDisabled;return l.a.createElement("div",{style:{margin:10,display:"flex",justifyContent:"center"}},l.a.createElement("button",{onClick:o,disabled:c},"<"),l.a.createElement("select",{value:e.state.selectYear,onChange:function(a){var t=a.target.value;r(t),e.setState({selectYear:t})}},a.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("select",{value:e.state.selectMonth,onChange:function(a){var n=a.target.value;i(t.indexOf(n)),e.setState({selectMonth:n})}},t.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("button",{onClick:s,disabled:m},">"))},selected:this.state.dateOfEnrollment,onChange:this.handleEnrollDateChange,className:"personalDOB",placeholderText:"Date of Enrollment"})))),l.a.createElement("div",{className:"Mbs-app-form_upload-documents"},l.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Upload Documents"),l.a.createElement("div",{className:"form-row upload"},l.a.createElement("div",null,l.a.createElement("input",{id:"birthCertificate",type:"file",hidden:!0}),l.a.createElement("button",{class:"btn Mbs-app-form_btno",type:"button",onClick:this.fileUploadbirthCertificate}," Birth Certificate ",l.a.createElement("i",{className:"fa fa-upload"}))),l.a.createElement("div",null,l.a.createElement("input",{id:"degreeCertificate",type:"file",hidden:!0}),l.a.createElement("button",{class:"btn Mbs-app-form_btno",type:"button",onClick:this.fileUploaddegreeCertificate}," Degree/Diploma Certificate ",l.a.createElement("i",{className:"fa fa-upload"}))),l.a.createElement("div",null,l.a.createElement("input",{id:"registrationCertificate",type:"file",hidden:!0}),l.a.createElement("button",{class:"btn Mbs-app-form_btno",type:"button",onClick:this.fileUploadregistrationCertificate},"Registration Certificate",l.a.createElement("i",{className:"fa fa-upload"}))),l.a.createElement("div",null,l.a.createElement("input",{id:"nimaLifeCertificate",type:"file",hidden:!0}),l.a.createElement("button",{class:"btn Mbs-app-form_btno",type:"button",onClick:this.fileUploadnimaLifeCertificate}," NIMA life Certificate",l.a.createElement("i",{className:"fa fa-upload"})," ")),l.a.createElement("div",null,l.a.createElement("input",{id:"marriageCertificate",type:"file",hidden:!0}),l.a.createElement("button",{class:"btn Mbs-app-form_btno",type:"button",onClick:this.fileUploadmarriageCertificate}," Marriage Certificate",l.a.createElement("i",{className:"fa fa-upload"}))))),l.a.createElement("div",{className:"Mbs-app-form_submit"},l.a.createElement("button",{class:"btn Mbs-app-form_view-form"},"View Form"),l.a.createElement("button",{type:"submit",class:"btn btn-success"}," Submit")),l.a.createElement("br",null),l.a.createElement(h.a,{ref:function(a){return e.recaptcha=a},sitekey:"6LcS8U0aAAAAAGaOUd9LRVKHnhDBzShPHgZ8gErf",onResolved:this.onResolved})))}}]),t}(l.a.Component);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null),l.a.createElement("div",{className:"footer_upcloud"},"Powered by Upcloud Technology Pvt. Ltd.")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a,t){e.exports=t(188)},76:function(e,a,t){},78:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.b6f2721e.chunk.js.map