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
                                MRITUNJOY
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
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <i className="fa-solid fa-newspaper"></i>
                                    Golang Articles
                                </Link>
                                <div className="dropdown">
                                    <p>
                                        <Link href="/blog/for_loop">
                                            <i className="fa-solid fa-caret-right"></i>
                                            For Loops Patterns
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Data Structure
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="">
                                            <i className="fa-solid fa-caret-right"></i>
                                            Math Programs
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