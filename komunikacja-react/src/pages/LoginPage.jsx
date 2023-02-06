import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


export let nazwauseraa = [];


function LoginPage() {

const [errMsg, setErrMsg] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
const navigate = useNavigate();


//===========================

const daneuzytkownika = [];
const [users, setUzytkownicy] = useState([]);
const getUzytkownicy = async () => {
  try {
    const response = await fetch("http://localhost:5000/uzytkownicy");
    const jsonData = await response.json();

    setUzytkownicy(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
    getUzytkownicy();
}, []);
//------------------------------------
const mojafun = async () => {
    console.log(users);
    let result = users;
    result.map((ele) => {
        daneuzytkownika.push({username: ele.imie, password: ele.nazwisko, stanowisko: ele.id_stanowisko});
    });
};
mojafun();
console.log(daneuzytkownika);
//===========================
//typy stanowiska:
//1 - admin
//2 - dyspozytor
//3 - kierowca


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
    
    e.preventDefault(); 
    let {uname, pass} = document.forms[0];
    const userData = daneuzytkownika.find((user) => user.username === uname.value);
    //console.log(uname.value);//username
    if (userData) {
        if (userData.password !== pass.value) {
            setErrMsg({ name: "pass", message: errors.pass });
        } else {
            //nazwauseraa = userData.username;
            nazwauseraa =[];
            nazwauseraa.push(userData.username);
            console.log(nazwauseraa);
            //export nazwauseraa;
            setIsSubmitted(true);
            
            
                    if (userData.stanowisko) {
                        switch (userData.stanowisko) {
                            case 1:
                                navigate('/AdminPanel');
                                break;
                            case 2:
                                //console.log(userData.uname);
                                navigate('/DispatcherPanel');
                                break;
                            case 3:
                                //console.log(userData.stanowisko);
                                navigate(`/DriverPanel?id=${nazwauseraa}`);
                                break;
                            default:
                                navigate('/');
                                break;
                        }
                    } else {
                        throw new Error('Invalid login');
                    }
                
                
        }
    } else {
        setErrMsg({ name: "uname", message: errors.uname });
    }
    
    };

const renderForm = (
  
    <form className='loging' onSubmit={ handleSubmit }>
        <div className="input-container"><label>Username </label><input type="text" name="uname" required /></div>
        <div className="input-container"><label>Password </label><input type="password" name="pass" required /></div>
        <div className="button-container"><input type="submit" value="Dalej" /></div>
    </form>

);

    return (
        <div className="loginContainer">
            
            <div className="logoPanel"><Link to="/" className='logoLink'><h2>logo busy.pl</h2></Link></div>  
            
            <div className="loginForm"><h2 className="loginTitle">Zaloguj sie</h2>{isSubmitted ? console.log('done') : renderForm}</div>
            
            <footer className="PageFooter adminFooterSettings"><p>2022 BD2 Projekt</p></footer>

        </div>
    );
}
export default LoginPage;