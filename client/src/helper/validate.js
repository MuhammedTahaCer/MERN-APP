import toast from 'react-hot-toast'

// ** Validate LoginPage's Username**
export async function  usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

// ** Validate Password Page **
export async function passwordValidate(values){
    const errors =  passwordVerify({}, values);

    return errors
}

// *** validate Reset password
export async function resetPwdValidate(values){
    const errors = passwordVerify({}, values)
    
    if(values.password !==values.confirm_pwd){
        errors.exist=toast.error('Password not match...')
    }

    return errors
}

// ** Validate register form
export async function registerValidate(values){
    const errors = usernameVerify({}, values)
        passwordVerify(errors, values)
        emailVerify(errors, values)

    return errors 
}


/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}

// == --------------------------------- ==




//  **Verify User's password**
    function passwordVerify(error={}, values){
        const nishCharacters =/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if(!values.password){
            error.password = toast.error("Password is Required!")
        } else if(values.password.includes(" ")){
            error.password = toast.error("Wrong Password...")
        }else if(values.password.length < 4){
            error.password = toast.error("Password must be  more then 4 char long")
        } else if(!nishCharacters.test(values.password)) {
            error.password = toast.error("Password must be have special char least 1")
        }

        return error
    }

//  **Verify User's name**
function usernameVerify(error={}, values){
    if(!values.username){
        // error.username = "Username Requierd!"
        error.username = toast.error("Username Requierd!")
    }
    else if(values.username.includes("")){
        error.username= toast.error("Invalid Username...")
    }
    return error;
}

// ** Verify  e-Mail
function emailVerify(error={}, values){
    if(!values.mail){
        error.mail=toast.error("mail requiered...")
    }else if(values.mail.includes(" ")){
        error.mail = toast.error("Wrong adress...")
    }else if(!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.mail)){
        error.mail= toast.error(" Invalid mail adress...")
    }

    return error
}