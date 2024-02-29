import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast()
    const logIn = useAuthStore(state => state.login)
    const logOut = useAuthStore(state => state.logout)

    const signup = async (input) => {
        if (!input.email || !input.password || !input.username || !input.fullName) {
            showToast("Error", "Please fill all the fields", "error");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(input.email, input.password)
            if(!newUser && error) {
                showToast("Error", error.message, "error");
                return;
            }
            if(newUser){
                const userDoc = {
                    uid: newUser.user.uid,
                    email: input.email,
                    username: input.username,
                    fullName: input.fullName,
                    bio: "",
                    profilePicUrl: "",
                    followers:[],
                    following:[],
                    posts: [],
                    createdAt: Date.now()
                };
                await setDoc(doc(firestore, "user", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser
            }
        } catch (err) {
            showToast("Error", error.message, "error");
        }
    }

    
  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword