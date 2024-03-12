import React from 'react'
import useShowToast from './useShowToast'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

const useLogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth)

    const loginUser = useAuthStore((state) => state.login)

    const login = async(input) => {
        if(!input.email || !input.password){
            return showToast("Error", "Please fill in your email and password", "error")
        }
        try{

            const userCred = await signInWithEmailAndPassword(input.email, input.password)
            if(userCred){
                const docRef = doc(firestore, "user", userCred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
                loginUser(docSnap.data());
            };
        } catch (err) {
        showToast("Error", err.message, "error");
    };
    } 
    return {loading, error, login}
}

export default useLogin