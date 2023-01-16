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
   // console.log(loginCred.username[0]);
// find user login info
const userData = loginCred.find((user) => user.username === uname.value);
console.log(userData);
// compare
if (userData) {
    if (userData.password !== pass.value) {
        // Invalid password
        setErrMsg({ name: "pass", message: errors.pass });
    } else {
        setIsSubmitted(true);
        // Send a POST request to the server with the user's login data
        fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({
                username: uname.value,
                password: pass.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to login');
                }
            })
            .then(() => {
                console.log(userData.username)
                if (userData.username) {
                    switch (userData.username) {
                        case 'admin1':
                            navigate('/AdminPanel');
                            break;
                        case 'kierowca1':
                            navigate('/DriverPanel');
                            break;
                        case 'dyspozytor1':
                            navigate('/DispatcherPanel');
                            break;
                        default:
                            navigate('/');
                            break;
                    }
                } else {
                    // if login is not valid, throw an error
                    throw new Error('Invalid login');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
} else {
    // Username not found
    setErrMsg({ name: "uname", message: errors.uname });
}
};

const renderForm = (
  
         <form className='loging' onSubmit={handleSubmit}>
             <div className="input-container">
                 <label>Username </label>
                 <input type="text" name="uname" required />
             </div>
             <div className="input-container">
                 <label>Password </label>
                 <input type="password" name="pass" required />
             </div>
             <div className="button-container">
             <input type="submit" value="Dalej" />
             </div>
         </form>
 
);

    return (
        <div className="loginContainer">
             <div className="logoPanel"><Link to="/" className='logoLink'><h2>logo busy.pl</h2></Link></div>
             
        <div className="loginForm">
             <h2 className="loginTitle">Zaloguj sie</h2>
             {isSubmitted ? console.log('done') : renderForm}
         </div>
         <footer className="PageFooter adminFooterSettings"><p>2022 BD2 Projekt</p></footer>
        </div>
    );
}

export default LoginPage;