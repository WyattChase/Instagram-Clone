import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
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

        const usersRef = collection(firestore, "user")

        const q = query(usersRef, where("username", "==", input.username));
        const querySnapshot = await getDocs(q)

        if(!querySnapshot.empty){
            showToast("Error", "Username already exists", "error");
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
                loginUser(userDoc)
            }
        } catch (err) {
            showToast("Error", err.message, "error");
        }
    }

    
  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword