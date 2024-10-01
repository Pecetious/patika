import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import {Button, Text} from '@chakra-ui/react'
function Profile({history}) {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = async ()=>{
         logout(()=>{
            navigate("/")
         });
    }
  return (
    <div>
        <Text fontSize="22">
            Profile
        </Text>
      <code>
        {JSON.stringify(user)}
      </code>
      <Button colorScheme='pink' mt="5" onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Profile
