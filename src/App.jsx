import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePages/home'
import Authpage from './pages/AuthPage/authpage'
import { PageLayout } from './layouts/PageLayout'


function App() {
  
  return (
    <PageLayout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Authpage/>}/>
    </Routes>
    </PageLayout>
  )
}

export default App
