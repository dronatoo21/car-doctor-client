import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth ,email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth ,email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
    },[])

    const authInfo = { user, loading, createUser, loginUser, logOut };

    return (
        <div>
            <AuthContext.Provider value={authInfo}> 
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;