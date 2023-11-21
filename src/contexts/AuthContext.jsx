import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    isLoggedIn: false
});

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const loginHandler = async (email, password) => {
        const url = `https://disco-store-default-rtdb.firebaseio.com/Users.json?orderBy="email"&equalTo="${email}"`
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('Error del servidor');
        }

        const responseData = await response.json();
        return responseData;
    }

    const onLogin = async (email, password) => {
        try{
            const result = await loginHandler(email, password);

            if(Object.values(result).length ===0){
                alert("El usuario no existe");
            }else{
                const id = Object.keys(result)[0];
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('userId', id);
                setIsLoggedIn(true);
                navigate('/inventory');
            }
        }catch (err){
            alert(err.message);
        }
    }

    const onLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
        navigate('/login');
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn){
            setIsLoggedIn(true);
        }
    })

    return(
        <>
            <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                onLogin,
                onLogout
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContext;