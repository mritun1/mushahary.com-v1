import { setCookie } from 'cookies-next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../component/common/footer'
import Header from '../component/common/header'

export default function Contact() {

    const [isLoading, setLoading] = useState(false);

    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        setLoading(true);

        // Get data from the form.
        const data = {
            name: event.target.fullName.value,
            email: event.target.email.value,
            sub: event.target.sub.value,
            message: event.target.message.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        console.log(JSONdata)

        // API endpoint where we send form data.
        const endpoint = 'http://localhost:8000/email'

        // Form the request for sending data to the server.
        const options = {

            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        

        alert(result.status)

        event.target.fullName.value = '';
        event.target.email.value = '';
        event.target.sub.value = '';
        event.target.message.value = '';

        setLoading(false);

    }
    return(
        <div>
            <Head>
                <title> Contact - Mritunjoy Mushahary Personal website</title>
                <meta name="description" content="Contact - Mritunjoy Mushahary Personal website" />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>
            <main className='container'>
                <Header />

                <div className="about">
                    <h1>Contact - Mritunjoy Mushahary</h1>
                    <p>Send Email to: Mritunjoy Mushahary.</p>
                    <div >
                        <form onSubmit={handleSubmit} className='contact_table' >
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
                                            <input type="text" name="email" id="email" placeholder='Your Email' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Subject:</td>
                                        <td>
                                            <input type="text" name="sub" id="sub" placeholder='Subject' />
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
                                            {/* {isLoading && <p>Loading...</p>}
                                            {!isLoading && <button type='submit' className='email_btn'>Send Email</button>} */}

                                            {isLoading ? <p>Loading...</p> : <button type='submit' className='email_btn'>Send Email</button>}
                                            
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