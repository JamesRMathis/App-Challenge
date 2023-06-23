import React from "react"
import { getAuth } from 'firebase/auth'

import './Dashboard.scss'

function Dashboard () {
    const auth = getAuth()

    return (
        <>
            <h1>Dashboard</h1>
            <p>Welcome, {auth.currentUser.email}!</p>
        </>
    )
}

export default Dashboard