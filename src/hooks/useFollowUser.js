import React, { useState } from 'react'
import useAuthStore from '../store/authStore';
import userProfileStore from '../store/userProfileStore';
import useShowToast from './useShowToast';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { useEffect } from 'react';

const useFollowUser = (userId) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isFollowing, setIsFollowing ] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const { userProfile, setUserProfile } = userProfileStore();
    const showToast = useShowToast();

    
    const handleFollowUser = async () => {
        setIsLoading(true);
        try {
            const userRef = doc(firestore, "user", authUser.uid);
            const userToFollowOrUnfollowRef = doc(firestore, "user", userId);

            await updateDoc(userRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
            });
            await updateDoc(userToFollowOrUnfollowRef, {
                followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
            });

            if (isFollowing){
                //unfollow
                setAuthUser({
                    ...authUser,
                    following: authUser.following.filter((uid) => uid !== userId)
                });
                if (userProfile)
                    setUserProfile({
                        ...userProfile,
                        followers: userProfile.followers.filter((uid) => uid !== authUser.uid),
                })
                
                localStorage.setItem("user-info",
                JSON.stringify({
                    ...authUser,
                    following: authUser.following.filter((uid) => uid !== userId)
                })
                )
                setIsFollowing(false);
            } else {
                //follow
                setAuthUser({
                    ...authUser,
                    following: [...authUser.following, userId]
                });

                if (userProfile)
                    setUserProfile({
                        ...userProfile,
                    followers: [...userProfile.followers, authUser.uid]
                })

                localStorage.setItem("user-info",
                JSON.stringify({
                    ...authUser,
                    following: [...authUser.following, userId]
                })
                );
                setIsFollowing(true);
            }
        } catch (error) {
            showToast("Error", error.message, "error");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (authUser) {
            const isFollowing = authUser.following.includes(userId);
            setIsFollowing(isFollowing);
        }
    }, [authUser, userId])

    return { isLoading, isFollowing, handleFollowUser };
}

export default useFollowUser