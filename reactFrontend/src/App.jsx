import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useAuthContext } from './hooks/useAuthContext';



function App() {
  const {user} = useAuthContext();

  return (
    <> 
      <div className="flex min-h-screen bg-slate-100 max-w-[100vw]">
        <BrowserRouter>
        <div className='grid layout'>
          <Header />
          <Routes>
            <Route path='/' element ={<HomePage/>} />
            <Route path='/logIn' element={!user ? <LoginPage /> : <Navigate to='/'/>} />
            <Route path= '/signup' element ={!user ? <SignUpPage /> : <Navigate  to='/' />} />
            <Route path='/contact' element = {<ContactPage />} />
            <Route path = '/about' element = {<AboutPage />} />
            <Route path = 'profile' element = {user ? <ProfilePage /> : <Navigate to='/logIn' />} />
          </Routes>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
