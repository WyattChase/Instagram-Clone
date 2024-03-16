import React, { useState } from 'react'
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import usePostStore from '../store/postStore';

const usePostComment = () => {
    const [ isLoading, setIsLoading ] = useState();
    const showToast = useShowToast();
    const authUser = useAuthStore((state) => state.user);
    const addComment = usePostStore((state) => state.addComment);

    const handlePostComment = async (postId, comment) => {
        if (isLoading) return;
        if (!authUser) return showToast("Error", "You must be logged in to comment", "error");
        setIsLoading(true);
        const newComment = {
            comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId
        }

        try {
            
        } catch (error) {
            
        }
    }
    return { isLoading, handlePostComment};
}

export default usePostComment