import { useState, useEffect } from 'react'
import { usuariosApi } from '../api/usuariosApi'

export const useUsuarios = () => {
    const [users, setUsers]  = useState([]);

    useEffect(() => {
      getUsuarios();
    }, [])
    
    
    const getUsuarios = async() => {
        const resp = await usuariosApi.get('https://reqres.in/api/users')
        setUsers(resp.data.data)
    }

    return{
        users
    }
}