
import { TextField, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Login = () => {
    var [input, setinput] = useState({email: "", password: ""})

    var location = useLocation()
    var navigate = useNavigate()

    const inputHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
      }


      const addHandler = () => {
        axios.post("http://localhost:8012/login", input)
           .then((res) => {
             alert(res.data.message);
             console.log("account found");
             if (res.data.token) {

                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);
                
                const role = localStorage.getItem("role");
          
                if (role === "user") {
                    navigate("/products");
                } else {
                    navigate("/admin");
                }
                setinput({ email: "", password: "" });
            }
           })
       }

       useEffect(() => {
        if (location.state !== null) {
          setinput({
            ...input,
            email: location.state.val.email,
            password: location.state.val.password,
          })
        }
      }, [location.state]);
  return (
    <div>
        <br />
      <TextField label="email" variant="outlined" name="email" value={input.email} onChange={inputHandler}>Email</TextField><br /><br />
      <TextField label="password" variant="outlined" name="password" value={input.password} onChange={inputHandler}>Password</TextField><br /><br />
      <Button varient="contained" onClick={addHandler}>Sumbit</Button>
    </div>
  )
}

export default Login