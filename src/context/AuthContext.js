import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { async } from "@firebase/util";


const AuthContext = createContext()


export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})

    // const googleSignIn = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)  
    // }

    // function googleSignIn() {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //     setDoc(doc(db, 'users', auth.currentUser.email), {
    //         savedShows: []
    //     })
    // }

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setDoc(doc(db, 'users', user.email), {
                    savedShows: []
                })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log("could not sign in")
                // ...
            });
    }


    const signUp = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        const docRef = doc(db, 'users', email);
        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {
            console.log("Document exist!");
            // Throws an error.
            throw new Error('Document Exist!');
        } else {
            await setDoc(docRef, {
                savedShows: []
            });
        }

    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("user", currentUser)

        })
        return () => {
            unsubscribe()
        }
    }, [])



    return (
        <AuthContext.Provider value={{ googleSignIn, signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}