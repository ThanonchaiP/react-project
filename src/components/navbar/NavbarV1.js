import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './NavbarV1.css';

const NavbarV1 = () => {

    const [click,setClick] = React.useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav>
                <div className="navbar-logo">
                    <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
                        <i className="fas fa-piggy-bank"></i>ระบบประเมินภาวะโภชนาการ
                    </Link>
                </div>
                <div className="navbar-menu">
                    <ul className="menu">
                        <li><NavLink to="/" className="menu-link" >นักเรียน</NavLink></li>
                        <li><NavLink to="/" className="menu-link" >คุณครู</NavLink></li>
                        <li><NavLink to="/" className="menu-link" >รายงาน</NavLink></li>
                    </ul>
                    <div className="navbar-signup">
                        <Link to="/" className="menu-link">
                            Thanonchai[Admin]
                        </Link>
                        <Link to="/" className="navbar-btn">
                            ออกกจากระบบ
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarV1
