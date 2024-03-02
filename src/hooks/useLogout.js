import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser = useAuthStore((state) => state.user)

    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info");
            logoutUser();
            console.log("logged out")
        } catch (err) {
            showToast("Error", err.message, "error")
        }
    }


    return { handleLogout, isLoggingOut, error }

}

export default useLogout