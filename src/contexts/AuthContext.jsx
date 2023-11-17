import React, {createContext} from "react";

export const AuthContextProvider = ({children}) => {
    return(
        <>
            <React.Fragment>
                {children}
            </React.Fragment>
        </>
    )
}

// export default AuthContext;