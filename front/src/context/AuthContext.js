import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] =  useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState()

    const navigate = useNavigate();

    let loginUser = async(e) => {
        e.preventDefault()
        let response = await fetch('http://localhost:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({'username':e.target.email.value,'password':e.target.password.value})
        })
        let data = await response.json()

        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/home')
        }else{
            alert('Something went wrong!')
        }
    }

    let registerUser = async(e) => {
        let response = await fetch('http://localhost:8000/api/register/', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'email':e.target.email.value, 'password':e.target.password.value, 'password2':e.target.password2.value})
        })
        let data = await response.json()
        console.log(response)
        if (response.status === 200){
            let ev = new Event("submit", e.options)
            ev.target = {email: e.target.username.value, password: e.target.password.value}
            // {target:{email: e.target.username.value, password: e.target.password.value}}
            // ev.target.email.value = e.target.username.value
            // ev.target.password.value = e.target.password.value
            await loginUser(ev)
        }else{
            alert('Something went wrong!')
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let updateToken = async(e) => {
        let response = await fetch('http://localhost:8000/api/token/refresh/', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })
        let data = await response.json()

        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }



    let contextData={
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        registerUser:registerUser

    }

    useEffect(() => {
        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() => {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}