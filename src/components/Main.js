import React, {useEffect, useState} from 'react';
import api from '../services/api'



export default function Main({ match }){
    const [users, setUsers] = useState([]);
 


    // chamada api
    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('devs', {
                headers: { 
                    user: match.params.id,
                }
            });
            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id])


    //chamada do socket



    return(
        <div className='main-container'>

                { users.length > 0 ? (
                   <ul>
                        {users.map(user => (
                            <li key={user._id}>
                            <img src={user.avatar} alt={user.name}/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>
                            
                            
                        </li>
                        ))}
                    </ul>
                ) : (
                    <div className="empty">Acabou :(</div>
                )}

        </div>
    )
;}