import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { firestore, storage } from '../firebase/firebase';
import userProfileStore from '../store/userProfileStore';
import { doc, updateDoc } from 'firebase/firestore';

const useEditProfile = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);
    const setProfile = userProfileStore((state) => state.setUserProfile);
    console.log(authUser)

    const showToast = useShowToast()

    const editProfile = async(input, selectedFile) => {
        if(isLoading || !authUser) return
        setIsLoading(true);
        
        const storageRef = ref(storage, `profilePic/${authUser.uid}`);
        const userDocRef = doc(firestore, "user", authUser.uid);

        let URL = "";

        try {
            if(selectedFile){
                await uploadString(storageRef, selectedFile, "data_url");
                URL = await getDownloadURL(ref(storage, `profilePic/${authUser.uid}`));
            }

            const updatedUser = {
                ...authUser,
                fullName: input.fullName || authUser.fullName,
                username: input.username || authUser.username,
                bio: input.bio || authUser.bio,
                profilePicUrl: URL || authUser.profilePicUrl
            }

            await updateDoc(userDocRef, updatedUser);
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setUser(updatedUser);
            setProfile(updatedUser);
            showToast("Success", "Profile was updated successfully", "success");
            
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

  return { isLoading, editProfile }
}

export default useEditProfile