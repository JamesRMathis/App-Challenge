import React from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebaseApp'

import './SignUp.scss'

function SignUp () {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPass, setConfirm] = React.useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmChange = (e) => {
        setConfirm(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPass) {
            alert('Passwords do not match')
            return
        }

        try {
            const auth = getAuth(app)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            alert(`User ${user.email} signed up`)
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

            <label htmlFor="confirmPass">Confirm Password</label>
            <input type="password" name="confirmPass" value={confirmPass} onChange={handleConfirmChange} />

            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp