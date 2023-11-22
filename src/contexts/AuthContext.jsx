import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../pages/Shared/Modal";

const AuthContext = createContext({
    isLoggedIn: false
});

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                setIsModalOpen(true);
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

            <Modal 
                title={"Usuario no encontrado"} 
                content={"Por favor ingresar usuario valido"} 
                isOpen={isModalOpen} 
                action={"OK"} 
                onConfirm={() => setIsModalOpen(false)}></Modal>
        </>
    )
}

export default AuthContext;