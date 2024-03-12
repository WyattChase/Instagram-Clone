import React, { useState } from 'react'
import useAuthStore from '../store/authStore';

const useFollowUser = (userId) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isFollowing, setIsFollowing ] = useState(false);
    const authUser = useAuthStore()

    //userToFollowOrUnfollowRef

    return { isLoading, isFollowing, handleFollowUser };
}

export default useFollowUser