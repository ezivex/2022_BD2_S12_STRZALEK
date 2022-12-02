import React from 'react';

function LoginPage() {
    return (
        <div className="LoginContainer">
           <div className="logoLogin"><p>logo busy.pl</p></div>
           <div className="loginForm">
                <h2 className="loginTitle">Zaloguj sie</h2>
                <form className='loging'>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                            {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                        {/* {renderErrorMessage("pass")} */}
                    </div>
                    <div className="button-container">
                    <input type="submit" />
                    </div>
                </form>
            </div> 
        </div>
    );
}

export default LoginPage;