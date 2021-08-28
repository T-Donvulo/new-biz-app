import {useState ,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {users} from '../../api/users'

const checkIfAuthToken = async () => {
    const {hash} = window.location;
    if(!hash || !hash.startsWith('#/confirmation_token')) return false;
    const  tokenValue = hash.replace(/#\/confirmation_token=/, '');
   await users.signInWithToken(tokenValue)
   return true;
}

export const useApp = () =>{
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(null)
    
    useEffect(()=> {
        const hasAuthToken = checkIfAuthToken();

        users.getCurrent().then(response =>{
            if(!response) return setLoggedIn(false)
            history.push('/items/list')
        })
    }, [])

    return {
        checking: loggedIn === null,
        loggedIn,
    }
}

export default useApp

