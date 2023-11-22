import React, { useContext, useEffect, useReducer, useState } from "react";
import { Validation } from "../Shared/styles";
import Card from "../../components/UI/Card/Card";
import { LoginLayout } from "./styles";
import { Btn } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import AuthContext from "../../contexts/AuthContext"
import { ACTIONS, initialState, reducer } from "./reducer";
import { Link } from "react-router-dom";


function Login(){
    const authContext = useContext(AuthContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    const {email, emailValid, password, passwordValid, formValid} = state;

    useEffect(() => {
        dispatch({type: ACTIONS.VALIDATE_FORM});
    }, [email, password]);

    function emailHandler(event) {
        dispatch({
            type: ACTIONS.UPDATE_EMAIL,
            payload: event.target.value
        })
    }

    function passwordhandler(event) {
        dispatch({
            type: ACTIONS.UPDATE_PASSWORD,
            payload: event.target.value
        })
    }

    function emailValidation() {
        dispatch({
            type: ACTIONS.EMAIL_BLUR
          })
    }

    function passwordValidation() {
        dispatch({
            type: ACTIONS.PASSWORD_BLUR
          })
    }

    function submitHandler(event) {
        event.preventDefault();
        authContext.onLogin(email, password);
    }

    return (
        <Card>
            <LoginLayout>
                <form onSubmit={submitHandler}>
                    <Validation className={`${'login-input'} ${emailValid === false ? 'isInvalid' : ''}`}>
                        <label htmlFor="user">Usuario*</label>
                        <Input name="user" type="text" placeholder="Correo electrónico" value={email} 
                        onChange={emailHandler} onBlur={emailValidation}/>
                    </Validation>

                    <Validation className={`${'login-input'} ${passwordValid === false ? 'isInvalid' : ''}`}>
                        <label htmlFor="password">Contraseña*</label>
                        <Input name="password" type="password" placeholder="Contraseña" value={password} 
                        onChange={passwordhandler} onBlur={passwordValidation}/> 
                    </Validation>

                    <Validation className="buttons">
                        <Btn 
                        disabled={emailValid === false || passwordValid === false || !email || !password}>
                            Acceder
                        </Btn>

                        <Link to="/home"><Btn>Cancelar</Btn></Link>
                    </Validation>
                </form>
            </LoginLayout>
        </Card>
    )
}

export default Login;