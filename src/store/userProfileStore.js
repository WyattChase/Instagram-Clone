import React from 'react'
import { create } from 'zustand'

const userProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile:(userProfile) => set({ userProfile}),
    // this is used to update the number of posts in the profile page
    addPost:(post) => set((state) => ({
        userProfile: {...state.userProfile, posts: [post.id, ...state.userProfile.posts]}
    })),
    deletePost: (postId) => set((state) => ({
        userProfile: {
            ...state.userProfile,
            posts: state.userProfile.posts.filter((id) => id !== postId)
        }
    }))

}))
export default userProfileStore