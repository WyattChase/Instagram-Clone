import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePages/home'
import Authpage from './pages/AuthPage/authpage'
import { PageLayout } from './layouts/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import useAuthStore from './store/authStore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'


function App() {
  const [authU] = useAuthState(auth)
  
  return (
    <PageLayout>
    <Routes>
      <Route path="/" element={authU ? <Home/> : <Navigate to={"/auth"}/>}/>
      <Route path="/auth" element={!authU ? <Authpage/> : <Navigate to={"/"}/>}/>
      <Route path="/:username" element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
  )
}

export default App
