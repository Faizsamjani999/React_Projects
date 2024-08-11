import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase';
import { Button } from '@mui/material';

function GoogleLogin() {
    const navigate = useNavigate();

    const handleGoogleLogin = async()=>{
        await signInWithPopup(auth,provider)
        navigate("/add")
    }
  return (
    <Button variant="contained" onClick={handleGoogleLogin}>
      Sign in with Google
    </Button>
  )
}

export default GoogleLogin