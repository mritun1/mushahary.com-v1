import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../component/common/footer'
import Header from '../component/common/header'

export default function Contact() {
    return(
        <div>
            <Head>
                <title> About - Mritunjoy Mushahary Personal website</title>
                <meta name="description" content="About - Mritunjoy Mushahary Personal website" />
            </Head>
            <main className='container'>
                <Header />

                <div className="about">
                    <h1>Contact - Mritunjoy Mushahary</h1>
                    <p>Send Email to: Mritunjoy Mushahary.</p>
                    <div >
                        <form action="" className='contact_table'  method="post">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Full Name:</td>
                                        <td>
                                            <input type="text" name="fullName" id="fullName" placeholder='Full Name' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Your Email:</td>
                                        <td>
                                            <input type="text" name="fullName" id="fullName" placeholder='Your Email' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Subject:</td>
                                        <td>
                                            <input type="text" name="fullName" id="fullName" placeholder='Subject' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Message:</td>
                                        <td>
                                            <textarea name="message" id="message" placeholder='Write your message' rows={10}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <button className='email_btn'>Send Email</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>

                <Footer />

            </main>
        </div>
    )
}