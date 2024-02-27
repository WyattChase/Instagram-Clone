import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePages/home'
import Authpage from './pages/AuthPage/authpage'
import { PageLayout } from './layouts/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage'


function App() {
  
  return (
    <PageLayout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Authpage/>}/>
      <Route path="/:username" element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
  )
}

export default App
