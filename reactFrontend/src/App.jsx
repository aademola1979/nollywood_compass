import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <> 
      <div className="flex min-h-screen bg-slate-100 max-w-[100vw]">
        <BrowserRouter>
        <div className='grid layout'>
          <Header />
          <Routes>
            <Route path='/' element ={<HomePage/>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path= '/signup' element ={<SignUpPage />} />
            <Route path='/contact' element = {<ContactPage />} />
            <Route path = '/about' element = {<AboutPage />} />
            <Route path = 'profile' element = {<ProfilePage />} />
          </Routes>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
