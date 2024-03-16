import { create } from "zustand";



const usePostStore = create((set) => ({
    posts:[],
    createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
    //delete post
    deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),
    //add Comment
    //Set Posts
    setPosts: (posts) => set({posts})
}));

export default usePostStore;