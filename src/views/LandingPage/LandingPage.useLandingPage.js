import {useState ,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {users} from '../../api/users'


// const Demo = () => {
//    const [hash, setHash] = setHash();

//     useMount(() => {
//         setHash('#/path/to/page?userId=123');
// //   });
// // return (
//     <div>
//       <div>window.local.href:</div>
//       <div>
//           <pre>{window.location.href}</pre>
//       </div>
//       <div>Edit hash:</div>
//       <div>
//           <input style={{width:'100%'}} value={hash}
//           onChange={e => setHash(e.target.value)}/>
//       </div>
//     </div>
// //);
// };


export const useLandingPage = () =>{
    const history = useHistory();
    const [checking, setChecking] = useState(true)


    
    useEffect(()=> {
        const {hash} = window.location.hash
        console.log(hash)

        users.getCurrent().then(response =>{
            if(!response) return setChecking(false)
            history.push('/items/list')
        })
    }, [])

    return {
        checking
    }
}

export default useLandingPage