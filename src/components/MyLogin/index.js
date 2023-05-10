import React, { useEffect, useState } from "react";
import './style.css';

function MyLogin() {

    const [formValues, setFormValues] = useState({ email: '', password: '', remember: false })
    const [isLogedin, setlogedin] = useState(false)
  

    const onChange = (event) => {
        if (event.target.name === 'remember') {
            setFormValues({ ...formValues, [event.target.name]: event.target.checked })
        } else {
            setFormValues({ ...formValues, [event.target.name]: event.target.value })
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (formValues.remember) {
            localStorage.setItem('userData', JSON.stringify(formValues))
        } else {
            sessionStorage.setItem('userData', JSON.stringify(formValues))
        }

        setlogedin(true)
    }

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        setlogedin(false);
    }

    useEffect(() => {
        const userData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
        if (userData) {
            setlogedin(true)
        }
    }, [])

    

    return (
        <>
            {isLogedin ?
                <div>
                    <p>Back</p>
                    <button onClick={logout}>Back</button>
                </div>
                : <form>
                    <label>Login:<br />
                        <input name="email" type="login" onInput={onChange} /><br />
                    </label>
                    <label>Password:<br />
                        <input name="password" type="password" onInput={onChange} /><br />
                    </label>
                    <label>Remember:
                        <input name="remember" type="checkbox" onChange={onChange} />
                    </label><br /><br />
                    <button onClick={handleLogin}>Login</button>
                </form>
            }
        </>
    );
};

export default MyLogin;