import React from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebaseApp'

import './Login.scss'

function Login () {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth(app)
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            alert(`User ${user.email} logged in successfully!`)
        }
        catch (error) {
            const errorCode = error.code
            const errorMessage = error.message

            alert(errorCode, errorMessage)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={handleEmailChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={handlePasswordChange} />

            <button type="submit">Login</button>
        </form>
    )
}

export default Login