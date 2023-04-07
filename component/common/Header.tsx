import React, { useState } from "react"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBox, faCaretRight, faCircleDot, faHouse, faPeopleGroup, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

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
                                    <li><FontAwesomeIcon icon={faHouse} /> Home</li>
                                </a>
                                <li>
                                    <p><FontAwesomeIcon icon={faPeopleGroup} /> Team</p>
                                    <ul>
                                        <a href="/team/mritunjoy-mushahary">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                                Mritunjoy Mushahary
                                            </li>
                                        </a>
                                    </ul>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon={faBox} /> Services & Products</p>
                                    <ul>
                                        <a href="/photos/v2/photos">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                                Photos
                                            </li>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCAtGNXWv745_aJ1d6hUzIDw">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                                Youtube Golang
                                            </li>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UC4yIAbSHhvVBHKd6z_Zf8-g">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                                Youtube Vlog
                                            </li>
                                        </a>
                                        <a href="/articles/v2">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                                Articles
                                            </li>
                                        </a>
                                    </ul>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon={faCircleDot} /> Others</p>
                                    <ul>
                                        <a href="/contact">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                                Contact
                                            </li>
                                        </a>
                                        <a href="/terms">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
                                                Terms&Conditions
                                            </li>
                                        </a>
                                        <a href="/about">
                                            <li>
                                                <FontAwesomeIcon icon={faCaretRight} />
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
                                    <FontAwesomeIcon icon={faHouse} />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faPeopleGroup} />
                                    Team
                                </Link>
                                <div className="dropdown">
                                    <p>
                                        <Link href="/team/mritunjoy-mushahary">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            Mritunjoy Mushahary
                                        </Link>
                                    </p>
                                </div>
                            </li>

                            <li>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faBox} />
                                    Services & Products
                                </Link>
                                <div className="dropdown">
                                    <p>
                                        <Link href="/photos/v2/photos">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            Photos
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="https://www.youtube.com/channel/UCAtGNXWv745_aJ1d6hUzIDw">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            Youtube Golang
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="https://www.youtube.com/channel/UC4yIAbSHhvVBHKd6z_Zf8-g">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            Youtube Vlog
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/articles/v2">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            Articles
                                        </Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faCircleDot} />
                                    Others
                                </Link>
                                <div className="dropdown">
                                    <p>
                                        <Link href="/contact">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            Contact us
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/terms">
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            Terms&Conditions
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/about">
                                            <FontAwesomeIcon icon={faCaretRight} />
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