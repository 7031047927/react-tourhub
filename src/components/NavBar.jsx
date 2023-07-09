import { Link } from "react-router-dom";

export const NavBar = () =>{
    return (
        <>
        
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>SignIn</Link>
        </nav>
        </>
    )
}