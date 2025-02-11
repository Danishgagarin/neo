// imported this file inside Admin.jsx

import { TextField, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const CreateAdmin = () => {
    var [input, setinput] = useState({ name: "", email: "", password: "", role: "admin" })

    var location = useLocation()
    var navigate = useNavigate()

    const inputHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
      }


      const addHandler = () => {
        axios.post("http://localhost:2005/register", input)
           .then((res) => {
             alert(res.data.message);
           })
       }

       useEffect(() => {
        if (location.state !== null) {
          setinput({
            ...input,
            name: location.state.val.name,
            email: location.state.val.email,
            password: location.state.val.password,
            role:"user"
          })
        }
      }, [location.state]);
  return (
    <div>
        <br />
      <TextField label="name" variant="outlined" name="name" value={input.name} onChange={inputHandler}>Name</TextField><br /><br />
      <TextField label="email" variant="outlined" name="email" value={input.email} onChange={inputHandler}>Email</TextField><br /><br />
      <TextField label="password" variant="outlined" name="password" value={input.password} onChange={inputHandler}>Password</TextField><br /><br />
      <Button varient="contained" onClick={addHandler}>Sumbit</Button>
    </div>
  )
}

export default CreateAdmin