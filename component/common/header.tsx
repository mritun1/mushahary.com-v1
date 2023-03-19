import React from "react"
import Link from "next/link"

const Header = () => {
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
                    <div>
                        <ul>
                            <li>
                                <Link href="/" >
                                    <i className="fa-solid fa-file"></i>
                                    Home
                                </Link>
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
                                            Videos
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="/articles/v2/articles-home">
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