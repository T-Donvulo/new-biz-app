import {useState} from 'react';
import validator from 'validator';

export const useSignIn = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  [alert, setAlert] = useState(null)
    
    const SignIn = ()=>{
        if(!email || email.length < 1 )return setAlert('noEmail')
        if(!password || password.length < 1 )returnsetAlert('noPassword')

      if(!validator.isEmail(email)) return setAlert('formatEmail')
      if(password.length <8) return setAlert('shortPassword')

      setAlert('checking')
    }

    return{
        email,
        password,
        setEmail,
        setPassword,
        SignIn,
        alert,

    }
}

export default useSignIn