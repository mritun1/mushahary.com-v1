
import React from "react";


export default function Login(){
    return(
        <div className="login_bg">
            <div className="login_box">
                <h1>Admin Login</h1>
                <form action="" method="post">
                    <table >
                        <tbody>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-user"></i>
                                </td>
                                <td>
                                    <input type="text" name="username" id="username" placeholder="Username" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-lock"></i>
                                </td>
                                <td>
                                    <input type="password" name="password" id="password" placeholder="Password" />
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