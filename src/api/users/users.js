import GoTrue from 'gotrue-js'
import {openDB} from 'idb'

const auth = new GoTrue ({
    APIUrl: 'https://new-biz-app.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false,
})

const createUsersApi = () => {
    const dbRequest = openDB('users', 1, {
        upgrade: (innerDb) => {
            innerDb.createObjectStore('data', {keyPath: 'id'})
            innerDb.createObjectStore('meta', {keyPath: 'id'})
        }
    })

    const createAccount = async() =>{
        try {
            const db = await dbRequest
            const  {id} = await auth.signup(email, password)    
            
            await db.put('meta', {id: 'current', value: id} )
    } catch (error) {
            const errorAsString = error.toString()
    
            if(errorAsString === 'JSONHTTPError: A user with this email address has already been registered')
           {
                return [false, 'emailAlreadyUsed']
              }
              return [false, 'technical']
        })
        
    }
    }

    const signIn = async () => {

    }
   
    console.log(response)

    return {
        current,
        users,
        createAccount,
        signIn,

    }
}

export const users = {}

export default users