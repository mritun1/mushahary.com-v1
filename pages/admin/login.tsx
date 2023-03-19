
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";
import LogAuth from "../../controllers/authentication/login";



export default function Login(){

    //REDIRECT WHEN LOGGED IN
    LogAuth.LoggedIn("/admin/dash")

    let router = useRouter()

    // Handles the submit event on form submit.
    const handleSubmit = async (event:any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            user_name: event.target.user.value,
            password: event.target.pass.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        console.log(JSONdata)

        // API endpoint where we send form data.
        const endpoint = 'http://localhost:8000/api/v1/admin/login'

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
        
        alert(`Token: ${result.token}`)
        console.log(result.token)

        setCookie("LgTkn", result.token)

       //REDIRECT
        if (result.response == 1){
            
            router.push("/admin/dash")
        }
        
    }
    
    return(
        <div className="login_bg">
            <div className="login_box">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <table >
                        <tbody>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-user"></i>
                                </td>
                                <td>
                                    <input type="text" name="user" id="user" required placeholder="Username" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-lock"></i>
                                </td>
                                <td>
                                    <input type="password" name="pass" id="pass" required placeholder="Password" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td className="submitbtn">
                                    <input type="submit" name="submit" id="submit" value={"Login"} />
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}