(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(3),m=t.n(r);t(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(4),c=t(5),o=t(6),i=t(1),d=t(8),p=t(7),u=(t(15),t(16),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).state={fname:"",mname:"",lname:"",gender:null,dob:"",altNum:"",address:"",acadQual:"",examBody:"",yearPass:"",regNum:"",dateReg:"",nameofBoard:"",practitioner:null,scientificPub:null,titleofPaper:"",nimaBefore:null,branch:null,reasonDiscontinue:""},l.handleChange=l.handleChange.bind(Object(i.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(i.a)(l)),l}return Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state.altNum.altNum;if(""==a)return document.getElementById("messages").innerHTML="**PLEASE FILL MOBILE NO.",!1;if(isNaN(a))return document.getElementById("messages").innerHTML="**ENTER NUMERIC VALUES ONLY",!1;if(a.length<10)return document.getElementById("messages").innerHTML="**MOBILE NO. MUST HABE 10 DIGITS ONLY",!1;if(a.length>10)return document.getElementById("messages").innerHTML="**MOBILE NO. MUST HAVE 10 DIGITS ONLY",!1;var t=this.state.fname.fname,l=this.state.mname.mname,n=this.state.lname.lname;return isNaN(t)&&isNaN(l)&&isNaN(n)?void console.log(this.state):(document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY",!1)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container Mbs-app-form_container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("span",{class:"Mbs-app-form_dot"})),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("div",{className:"Mbs-app-form_main-heading"},"NIMA Mutual Benifits Scheme Application Form"),n.a.createElement("hr",null),n.a.createElement("div",{className:"Mbs-app-form_main-address"},"4140 Parker Rd. Allentown, New Mexico 31134"))),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"Mbs-app-form_personal-details"},n.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Personal Details"),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},n.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12 "},n.a.createElement("input",{required:!0,type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"fname",id:"fname",placeholder:" "}),n.a.createElement("span",null,"First Name")),n.a.createElement("div",{class:"col-md-2 col-sm-3 col-xs-12"},n.a.createElement("input",{required:!0,type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"mname",id:"mname",placeholder:" "}),n.a.createElement("span",null,"Middle Name")),n.a.createElement("div",{class:"col-md-2 col-sm-3 col-xs-12"},n.a.createElement("input",{required:!0,type:"text",className:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",name:"lname",id:"lname",placeholder:" "}),n.a.createElement("span",null,"Last Name")),n.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12"},n.a.createElement("select",{required:!0,class:"form-control",id:"gender",name:"gender"},n.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Gender"),n.a.createElement("option",{value:"M"},"Male"),n.a.createElement("option",{value:"F"},"Female"))),n.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12"},n.a.createElement("input",{required:!0,type:"date",name:"dob",className:"form-control Mbs-app-form_dob"}),n.a.createElement("span",null,"Date of Birth")),n.a.createElement("div",{className:"col-md-2 col-sm-3 col-xs-12"},n.a.createElement("select",{required:!0,class:"form-control",id:"age"},n.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Age"),n.a.createElement("option",{value:"A"},"1-6"),n.a.createElement("option",{value:"B"},"6-12"),n.a.createElement("option",{value:"C"},"12-18"),n.a.createElement("option",{value:"D"},"18-25"),n.a.createElement("option",{value:"E"},"Above 25")))),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-2"},n.a.createElement("div",{className:"col-xs-12 col-sm-10"},n.a.createElement("textarea",{required:!0,name:"address",className:"form-control address","aria-label":"With textarea",placeholder:" "}),n.a.createElement("span",null,"Address")),n.a.createElement("div",{className:"col-xs-12 col-sm-2"},n.a.createElement("label",{for:"pincode"},"PIN code:"),n.a.createElement("input",{required:!0,nam:"pinCode",type:"text",title:"Pin Code should be of 6 digits",pattern:"[0-9]{6}",maxlength:"6",minLength:"6",className:"form-control"}))),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-3"},n.a.createElement("div",{className:"col-sm-4 col-xs-12 "},n.a.createElement("input",{required:!0,type:"email",title:"Should be of form nima@example.com",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Email")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{require:!0,name:"Num",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Residential Number")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"altNum",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Clinic Number")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"altNum",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Mobile Number")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"altNum",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",type:"tel",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Alternate Number")))),n.a.createElement("div",{className:"Mbs-app-form_nominee-details"},n.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Nominee Details"),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},n.a.createElement("div",{className:"col-sm-2 col-xs-12 "},n.a.createElement("input",{required:!0,name:"nom-fname",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"First Name")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"nom-mname",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Middle Name")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"nom-lname",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Last Name")),n.a.createElement("div",{className:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"nom-relation",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z]{1,32}",type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Relation with Nominee")),n.a.createElement("div",{className:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"nom-mobNum",type:"tel",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Mobile Number")),n.a.createElement("div",{className:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,name:"nom-altNum",type:"tel",title:"Number should be of 10 digits only",pattern:"[1-9]{1}[0-9]{9}",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Alternate Number"))),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-2"},n.a.createElement("div",{className:"col-xs-12 col-sm-10"},n.a.createElement("textarea",{required:!0,name:"nom-address",className:"form-control address","aria-label":"With textarea",placeholder:" "}),n.a.createElement("span",null,"Address")),n.a.createElement("div",{className:"col-xs-12 col-sm-2"},n.a.createElement("label",{for:"pincode"},"PIN code:"),n.a.createElement("input",{required:!0,name:"nom-pinCode",type:"text",title:"Pin Code should be of 6 digits",pattern:"[0-9]{6}",className:"form-control"})))),n.a.createElement("div",{className:"Mbs-app-form_qualification-details"},n.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Qualification Details"),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},n.a.createElement("div",{className:"col-sm-8 col-xs-12 "},n.a.createElement("input",{required:!0,type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"College Name")),n.a.createElement("div",{class:"col-sm-4 col-xs-12"},n.a.createElement("input",{required:!0,type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Degree"))),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-2"},n.a.createElement("div",{className:"col-sm-10 col-xs-12 "},n.a.createElement("input",{required:!0,type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"University/Faculty Name")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,type:"number",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Year of Passing")))),n.a.createElement("div",{className:"Mbs-app-form_registration-and-membership-details"},n.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Registration and Membership Details"),n.a.createElement("div",{className:"form-row Mbs-app-form_pd-1"},n.a.createElement("div",{className:"col-sm-2 col-xs-12 "},n.a.createElement("input",{required:!0,type:"number",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Registration Number")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Year of Registration")),n.a.createElement("div",{class:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,type:"text",className:"form-control",placeholder:" "}),n.a.createElement("span",{style:{fontSize:"0.84rem"}},"Reg.Medical Council Board")),n.a.createElement("div",{className:"col-sm-2 col-xs-12"},n.a.createElement("select",{class:"form-control",id:"membership-type"},n.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Membership Type"),n.a.createElement("option",{value:"F"},"Full Time"),n.a.createElement("option",{value:"H"},"Half Time"))),n.a.createElement("div",{className:"col-sm-2 col-xs-12 "},n.a.createElement("input",{required:!0,type:"number",className:"form-control",placeholder:" "}),n.a.createElement("span",null,"Membership Number")),n.a.createElement("div",{className:"col-sm-2 col-xs-12"},n.a.createElement("input",{required:!0,type:"date",className:"form-control"}),n.a.createElement("span",null,"Date of Birth")))),n.a.createElement("div",{className:"Mbs-app-form_upload-documents"},n.a.createElement("div",{className:"Mbs-app-form_form-sub-heading"},"Upload Documents"),n.a.createElement("div",{className:"form-row upload"},n.a.createElement("button",{class:"btn Mbs-app-form_btno"},n.a.createElement("i",{class:"fa fa-upload"})," Birth Certificate"),n.a.createElement("button",{class:"btn Mbs-app-form_btno"},n.a.createElement("i",{class:"fa fa-upload"})," Degree/Diploma Certificate"),n.a.createElement("button",{class:"btn Mbs-app-form_btno"},n.a.createElement("i",{class:"fa fa-upload"})," Registration Certificate"),n.a.createElement("button",{class:"btn Mbs-app-form_btno"},n.a.createElement("i",{class:"fa fa-upload"})," NIMA life Certificate"),n.a.createElement("button",{class:"btn Mbs-app-form_btno"},n.a.createElement("i",{class:"fa fa-upload"})," Marriage Certificate"))),n.a.createElement("div",{className:"Mbs-app-form_submit"},n.a.createElement("button",{class:"btn Mbs-app-form_view-form"},"View Form"),n.a.createElement("button",{type:"submit",class:"btn btn-success"}," Submit")),n.a.createElement("br",null)))}}]),t}(n.a.Component));m.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.429e103a.chunk.js.map