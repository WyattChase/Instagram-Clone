import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import userProfileStore from '../store/userProfileStore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useGetUser = (username) => {
    const [isLoading, setIsLoading] = useState(true);
    const showToast = useShowToast();
    const { userProfile, setUserProfile} = userProfileStore();

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true);
            try {
                const q = query(collection(firestore, "user"), where("username", "==", username));
                const querySnap = await getDocs(q);

                if (querySnap.empty) return setUserProfile(null);

                let userDoc;
                querySnap.forEach((doc) => {
                    userDoc = doc.data();
                });

                setUserProfile(userDoc);
            } catch (e) {
                showToast("Error", e.message, "error");
            }
            finally {
                setIsLoading(false);
            }
        };
        getUserProfile();
    }, [setUserProfile, username, showToast]);

    return { isLoading, userProfile};
};

export default useGetUser