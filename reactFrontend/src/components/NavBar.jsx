import { Link } from "react-router-dom"
import { UseLogout } from "../hooks/useLogout"


const NavBar = () => {
    const {logOut} = UseLogout();

    const handleClick = () =>{
        logOut()
    }
    return (
        <div className="py-[1rem] container-px text-light/90 flex justify-between">
            <div className="flex gap-4">
                <Link to="/">
                <div className="font-serif">
                    <p>Nollywood</p>
                    <p>Compass</p>
                </div>
                </Link>
                
                <div className="md:flex gap-4 items-center hidden">
                    <Link to='/' className="link">Home</Link>
                    <Link to='/about' className="link">About</Link>
                    <Link to='/contact' className="link">Contact</Link>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <Link to='/signUp' className="link">Sign Up</Link>
                <Link to='/logIn' className="link">Login</Link>
            </div>
            <div className="hidden md:flex min-h-full items-center ">
                <button 
                onClick={() => handleClick()}
                className="bg-dark/70 hover:bg-dark py-1 px-2 rounded-md border-none">Log Out</button>
            </div>

        </div>
    )
}

export default NavBar