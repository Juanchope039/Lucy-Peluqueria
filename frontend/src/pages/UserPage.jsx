import React from 'react'
import { useUsuarios } from '../hooks/useUsuarios'

export const UserPage = () => {

    const {users} = useUsuarios()

    return (
    <div className='mt-5'>

        <h1>Usuarios</h1>
        
        <ul>
            <li>
                <ul>
                    <li>ID</li>
                    <li>Email</li>
                    <li>Name</li>
                    <li>Avatar</li>
                </ul>
            </li>
            {
                users.map(user => (
                    <li key={user.email}>
                        <ul>
                            <li>{user.id}</li>  
                            <li>{user.email}</li>
                            <li>{user.last_name}{user.last_name}</li>
                            <li>
                                <img 
                                    alt='avatar'
                                    src={user.avatar} 
                                    className="img-thumbnail"
                                    style={{
                                        width:50
                                    }}
                                />
                            </li>                            
                        </ul>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
