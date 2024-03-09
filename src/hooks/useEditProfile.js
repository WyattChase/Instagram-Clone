import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { ref } from 'firebase/storage';
import { storage } from '../firebase/firebase';

const useEditProfile = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const authUser = useAuthStore(state = state.user);

    const showToast = useShowToast()

    const editProfile = async(input, selectedFile) => {
        if(isLoading || !authUser) return
        setIsLoading(true);

        const storageRef = ref(storage, `profilePics/${authUser.uid}`)
        cpmst 

        try {
            if(selectedFile){

            }
            
        } catch (error) {
            
        }
    }

  return { isLoading, editProfile }
}

export default useEditProfile