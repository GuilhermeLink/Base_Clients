import { StyledNavbar } from "./style"
import { useContext, useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
interface INavbar {
    userAuthenticated: boolean
}

export const Navbar = ({ userAuthenticated }: INavbar) => {
    const [showNavbarMobile, setShowNavbarMobile] = useState<boolean>(false)
    const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <StyledNavbar>
            <nav>
                <div className="base-clients-logo" onClick={()=> navigate('')}>
                    <p>Base Clients</p>
                </div>
                <button className="menu-burger" onClick={() => setShowNavbarMobile(!showNavbarMobile)}>
                    {showNavbarMobile ? (
                        <GrClose size={20} />
                    ) : (
                        <GiHamburgerMenu size={20} />
                    )}
                </button>
                {userAuthenticated ? (
                    <div className="profile-info">
                        <h2 className="profile-initials">{currentUser?.name[0].toUpperCase()}{currentUser?.name[1].toUpperCase()}</h2>
                        <p>{currentUser?.name}</p>
                    </div>
                ) : (
                    <div className="profile-info">
                        <button className="btn btn-login" onClick={()=> navigate('')}>Fazer Login</button>
                        <button className="btn btn-register" onClick={()=> navigate('/register')}>Cadastrar</button>
                    </div>
                )}
            </nav>
            <ul className={showNavbarMobile ? "show" : "hidden"}>
                <hr />
                <li><button className="mobile-login" onClick={()=> navigate('')}>Fazer Login</button></li>
                <li><button onClick={()=> navigate('/register')}>Cadastrar</button></li>
            </ul>
        </StyledNavbar>
    )
}