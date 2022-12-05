import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function LoginPage() {


const [errMsg, setErrMsg] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const navigate = useNavigate();
// Users login info

const loginCred = [
    {
      username: 'admin1',
      password: 'admin',
    },
    {
      username: 'kierowca1',
      password: 'kierowca',
    },
    {
      username: 'dyspozytor1',
      password: 'dyspozytor',
    }
];

const errors = {
    uname: 'invalid username!!!',
    pass: 'invalid password!!!'
};

const handleSubmit = (e)=> {
    e.preventDefault(); // prevent page reload

    let {uname, pass} = document.forms[0];
    // find user login info
    const userData = loginCred.find((user) => user.username === uname.value);
    // compare
    if (userData){
        if (userData.password !== pass.value) {
            // Invalid password
            setErrMsg({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
            if(userData.username==='admin1'){
                navigate('/AdminPanel');
               }
               else if(userData.username==='kierowca1'){
                navigate('/BusDriverMainPage');
               }else if(userData.username==='dyspozytor1'){
                navigate('/DispatcherMainPanel');
               }
          }
        } else {
            // Username not found
            setErrMsg({ name: "uname", message: errors.uname });
          }
             
};

//generate error's message
const renderErrMsg = (name) =>
    name === errMsg.name && (<div className='error'>{errMsg.message}</div>);


const renderForm = (
  
         <form className='loging' onSubmit={handleSubmit}>
             <div className="input-container">
                 <label>Username </label>
                 <input type="text" name="uname" required />
                     {renderErrMsg("uname")}
             </div>
             <div className="input-container">
                 <label>Password </label>
                 <input type="password" name="pass" required />
                 {renderErrMsg("pass")} 
             </div>
             <div className="button-container">
             <input type="submit" value="Dalej" />
             </div>
         </form>
 
);

    return (
        <div className="loginContainer">
             <div className="logoLogin"><Link to="/" className='logoLink'><h2>logo busy.pl</h2></Link></div>
             
        <div className="loginForm">
             <h2 className="loginTitle">Zaloguj sie</h2>
             {isSubmitted ? console.log('done') : renderForm}
         </div>
         <footer className="PageFooter adminFooterSettings"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}

export default LoginPage;