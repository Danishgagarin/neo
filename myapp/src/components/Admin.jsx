import React from 'react'
import { Link } from 'react-router-dom'
import CreateAdmin from './CreateAdmin'
import { Button } from '@mui/material'

const Admin = () => {
  return (
    <div>
        <h1>Welcome to the admin's page</h1>
        <Link to="/manage">
          <Button variant="contained">Manage</Button>
        </Link>
        <CreateAdmin />
    </div>
  )
}

export default Admin
