import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useGetProfileById = (userId) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ userProfile, setUserProfile ] = useState(null);
    const showToast = useShowToast();
    
    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true);
            setUserProfile(null);
            try {
                const userRef = await getDoc(doc(firestore, "user", userId));
                console.log(userRef)
                if(userRef.exists()) {
                    setUserProfile(userRef.data());
                }
            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        }
        getUserProfile();
    },[showToast, setUserProfile, userId])
  return { isLoading, userProfile, setUserProfile };
}

export default useGetProfileById