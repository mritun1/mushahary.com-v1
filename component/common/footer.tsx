import React from "react"
import Link from "next/link"
const Footer = () => {

    // PRESENT DATE START
    var today = new Date();
    var yyyy = today.getFullYear();
    // PRESENT DATE END

    return(
        <>
            <footer className='footer'>
                <div className="logo">
                    <div className="logo_pic"></div>
                </div>
                <div className="foot">
                    <p>
                        <Link href="/about">About</Link> |
                        <Link href="/contact">Contact</Link> |
                        <Link href="/terms">Terms&Conditions</Link>
                    </p>
                    <h3>Design & Developed by <Link href="/">Mritunjoy Mushahary</Link></h3>
                    <p>2022-{yyyy}</p>
                </div>
            </footer>
        </>
    )
}
export default Footer