import React from "react";
import { Validation } from "../Shared/styles";
import Card from "../../components/UI/Card/Card";
import { LoginLayout } from "./styles";
import { Btn } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";


function Login(){
    return (
        <Card>
            <LoginLayout>
                <Validation className="login-input">
                    <label htmlFor="user">Usuario</label>
                    <Input name="user" type="text"/>
                </Validation>

                <Validation className="login-input">
                    <label htmlFor="password">Contraseña</label>
                    <Input name="password" type="password"/> 
                </Validation>

                <Validation className="buttons">
                    <Btn>Acceder</Btn>
                    <Btn>Cancelar</Btn>
                </Validation>
            </LoginLayout>
        </Card>
    )
}

export default Login;