import React, { useState } from "react"
import Link from "next/link"

const Header = () => {
    const [mobileMenuStatus,setMobileMenuStatus] = useState(false)
    function mobileMenuHandle(){
        setMobileMenuStatus(!mobileMenuStatus)
    }
    return (
        <>
            <div className="header">
                <div className="leftMenu">
                    <div className="logo">
                        <div className='logo_left'>

                            <div className="logo_pic"></div>

                        </div>
                        <div className='logo_right'>
                            <h2>
                                MUSHAHARY
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="rightMenu">
                    <div className="rightMenuMobile">
                        <button onClick={mobileMenuHandle}>MENU</button>
                        {mobileMenuStatus ? (<div className="rightMenuMobileDropDown">
                            <ul>
                                <a href="/">
                                    <li><i className="fa-solid fa-file"></i> Home</li>
                                </a>
                                <li>
                                    <p><i className="fa-solid fa-people-group"></i> Team</p>
                                    <ul>
                                        <a href="/team/mritunjoy-mushahary">
                                            <li>
                                                <i className="fa-solid fa-caret-right"></i>
                                                Mritunjoy Mushahary
                                            </li>
                                        </a>
                                    </ul>
                                </li>
                                <li>
                                    <p><i className="fa-solid fa-newspaper"></i> Services & Products</p>
                                    <ul>
                                        <a href="/photos/v2/photos">
                                            <li>
                                                <i className="fa-solid fa-caret-right"></i>
                                                Photos
                                            </li>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCAtGNXWv745_aJ1d6hUzIDw">
                                            <li>
                                                <i className="fa-solid fa-caret-right"></i>
                                                Youtube Videos
                                            </li>
                                        </a>
                                        <a href="/articles/v2">
                                            <li>
                                                <i className="fa-solid fa-caret-right"></i>
                                                Articles
                                            </li>
                                        </a>
                                    </ul>
                                </li>
                                <li>
                                    <p><i className="fa-solid fa-circle-chevron-down"></i> Others</p>
                                    <ul>
                                        <a href="/contact">
                                            <li>
                                                <i className="fa-solid fa-caret-right"></i>
                                                Contact
                                            </li>
                                        </a>
                                        <a href="/terms">
                                            <li>
                                                <i className="fa-solid fa-caret-right"></i>
                                                Terms&Conditions
                                            </li>
                                        </a>
                                        <a href="/about">
                                            <li>
                                                <i className="fa-solid fa-caret-right"></i>
                                                About us
                                            </li>
                                        </a>
                                    </ul>
                                </li>
                            </ul>
                        </div>):("")}
                        
                    </div>
                    <div className="rightMenuDesktopMenu">
                        <ul className="rightMenuDesktopUl">
                            <li>
                                <Link href="/" >
                                    <i className="fa-solid fa-file"></i>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa-solid fa-people-group"></i>
                                    Team
                                </Link>
                                <div className="dropdown">
                                    <p>
                                        <Link href="/team/mritunjoy-mushahary">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Mritunjoy Mushahary
                                        </Link>
                                    </p>
                                </div>
                            </li>

                            <li>
                                <Link href="#">
                                    <i className="fa-solid fa-newspaper"></i>
                                    Services & Products
                                </Link>
                                <div className="dropdown">
                                    <p>
                                        <Link href="/photos/v2/photos">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Photos
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="https://www.youtube.com/channel/UCAtGNXWv745_aJ1d6hUzIDw">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Youtube Videos
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/articles/v2">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Articles
                                        </Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <Link href="#">
                                    <i className="fa-solid fa-circle-chevron-down"></i>
                                    Others
                                </Link>
                                <div className="dropdown">
                                    <p>
                                        <Link href="/contact">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Contact us
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/terms">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Terms&Conditions
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/about">
                                            <i className="fa-solid fa-caret-right"></i>
                                            About us
                                        </Link>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header