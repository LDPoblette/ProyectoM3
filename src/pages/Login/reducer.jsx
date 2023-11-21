export const ACTIONS = {
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    EMAIL_BLUR: 'EMAIL_BLUR',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    PASSWORD_BLUR: 'PASSWORD_BLUR',
    VALIDATE_FORM: "VALIDATE_FORM"
}

export const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.UPDATE_EMAIL:
            return { ...state, email: action.payload,
                emailValid: action.payload.includes("@")};
        case ACTIONS.EMAIL_BLUR:
            return { ...state, email: state.email,
                emailValid: state.email.includes('@')};
        case ACTIONS.UPDATE_PASSWORD:
            return { ...state, password: action.payload,
                passwordValid: action.payload.trim().length > 5};
        case ACTIONS.PASSWORD_BLUR:
            return { ...state, password: state.password,
            passwordValid: state.password.trim().length > 5};
        case ACTIONS.VALIDATE_FORM:
            return {...state, formValid: state.email.includes("@") 
            && state.password.trim().length > 5};
        default:
            return state;
    }        
}

export const initialState = {
    email: '',
    emailValid: null,

    password: '',
    passwordValid: null,

    formValid: null
}