import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()


export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})


    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    return (
        <AuthContext.Provider value={{signUp, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}