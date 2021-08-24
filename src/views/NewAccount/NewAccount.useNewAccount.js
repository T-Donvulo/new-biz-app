import {useState} from 'react';
import validator from 'validator';

export const useNewAccount = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const  [alert, setAlert] = useState(null)
    
    const createAccount = async ()=>{
        if(!email || email.length < 1 )return
        setAlert('noEmail')
        if(!password || password.length < 1 )return
        setAlert('noPassword')
        if(!confirmPassword || confirmPassword.length < 1 )return('noConfirmedPassword')

      if(!validator.isEmail(email)) return setAlert('formatEmail')
      if(password.length <8) return setAlert('shortPassword')
      if(confirmPassword.length <8) return setAlert('shortConfirmPassword')

      if(password !== confirmPassword ) return setAlert('mismatchPasswords')
      setAlert('creating')

      const  response = await auth.signup(emial, password).catch(error => {
          const errorAsString = error.toString()

          if(errorAsString === 'JSONHTTPError: A user with this email address has already been registered')
         {
              return setAlert('emailAlreadyUsed')
            }
            return setAlert('technical')
      })
      console.log(response)
    }

    return{
        email,
        password,
        confirmPassword, 
        setEmail,
        setPassword,
        setConfirmPassword,
        createAccount,

    }
}

export default useNewAccount