(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(7),o=t.n(n),i=t(1),l=t(2),m=t(4),c=t(3),d=t(5),u=(t(14),function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",newEmail:"",newPassword:"",conf_password:"",email:"",password:"",usernameErr:"",emailErr:"",passwordErr:"",confPasswordErr:"",loginVisibility:"",signUpVisibility:""},t.onPageLoad=function(){t.this.setState({loginVisibility:"disable",signUpVisibility:"enable"})},t.accountAlready=function(){t.setState({loginVisibility:"",signUpVisibility:"disable",emailErr:"",passwordErr:"",confPasswordErr:"",usernameErr:"",email:"",password:""})},t.notMemberYet=function(){t.setState({loginVisibility:"disable",signUpVisibility:"enable",emailErr:"",passwordErr:"",username:"",newEmail:"",newPassword:"",conf_password:"",success:""})},t.onUsernameChange=function(e){t.setState({username:e.target.value,usernameErr:""})},t.onConfPasswordChange=function(e){t.setState({conf_password:e.target.value,confPasswordErr:""})},t.onEmailChange=function(e){t.setState({email:e.target.value,newEmail:e.target.value,emailErr:""})},t.onPasswordChange=function(e){t.setState({password:e.target.value,newPassword:e.target.value,passwordErr:""})},t.handleSignUpSubmit=function(e){e.preventDefault(),""===t.state.username?t.setState({usernameErr:"Username field cannot be empty!"}):t.setState({usernameErr:""}),""===t.state.newEmail?t.setState({emailErr:"Email field cannot be empty!"}):t.setState({emailErr:""}),""===t.state.newPassword?t.setState({passwordErr:"Password field cannot be empty!"}):t.setState({passwordErr:""}),""===t.state.conf_password?t.setState({confPasswordErr:"This field cannot be empty!"}):t.setState({confPasswordErr:""}),""!==t.state.conf_password&&""!==t.state.newPassword&&t.state.newPassword!==t.state.conf_password?t.setState({confPasswordErr:"Passwords do not match"}):""!==t.state.username&&""!==t.state.email&&""!==t.state.conf_password&&""!==t.state.newPassword&&t.state.newPassword===t.state.conf_password&&t.setState({success:"Welcome new user"})},t.handleLoginSubmit=function(e){e.preventDefault(),""===t.state.email?t.setState({emailErr:"Email field cannot be empty!"}):t.setState({emailErr:""}),""===t.state.password?t.setState({passwordErr:"Password field cannot be empty!"}):t.setState({passwordErr:""})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-wrapper "+this.state.loginVisibility,onLoad:this.onPageLoad},r.a.createElement("form",{onSubmit:this.handleLoginSubmit,className:"form login-form"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",value:this.state.email,onChange:this.onEmailChange}),r.a.createElement("p",{className:"error"},this.state.emailErr)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",value:this.state.password,onChange:this.onPasswordChange}),r.a.createElement("p",{className:"error"},this.state.passwordErr)),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("a",{id:"forgettenPass",href:"/"},"Forgotten password?"),r.a.createElement("small",null,"Not a member yet? ",r.a.createElement("a",{onClick:this.notMemberYet,href:this.notMemberYet},"Sign up"))),r.a.createElement("div",{className:"form-wrapper "+this.state.signUpVisibility},r.a.createElement("div",{className:"success"},this.state.success),r.a.createElement("form",{onSubmit:this.handleSignUpSubmit,className:"form login-form"},r.a.createElement("h1",null,"JOIN US"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.onUsernameChange}),r.a.createElement("p",{className:"error"},this.state.usernameErr)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",value:this.state.newEmail,onChange:this.onEmailChange}),r.a.createElement("p",{className:"error"},this.state.emailErr)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",value:this.state.newPassword,onChange:this.onPasswordChange}),r.a.createElement("p",{className:"error"},this.state.passwordErr)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"conf_password"},"Confirm Password"),r.a.createElement("input",{type:"password",value:this.state.conf_password,onChange:this.onConfPasswordChange}),r.a.createElement("p",{className:"error"},this.state.confPasswordErr)),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("small",null,"Already have an account? ",r.a.createElement("a",{onClick:this.accountAlready,href:this.accountAlready},"Login"))))}}]),a}(r.a.Component)),p=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u,null)}}]),a}(r.a.Component);o.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8a233eff.chunk.js.map