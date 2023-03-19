
import Link from "next/link";
import LogAuth from "../../../controllers/authentication/login";

const AdminSidebar = () => {

    //LOGOUT FUNCTION
    const logout = () => {
        LogAuth.LogOut("/admin/login")
    }

    return (
        <>
            <div className="adminSidebar">
                <div className="adminSideCont">

                    

                    <ul>
                        <Link target={"_blank"} href="/">
                            <li><i className="fa-solid fa-eye"></i> View Website</li>
                        </Link>
                        <Link href="/admin/dash">
                            <li><i className="fa-solid fa-gauge"></i> Dashboard</li>
                        </Link>
                        <Link href="/admin/articles">
                            <li><i className="fa-solid fa-newspaper"></i> Articles</li>
                        </Link>
                        <Link href="/admin/photos/dash">
                            <li><i className="fa-solid fa-photo-film"></i>  Photos</li>
                        </Link>

                        <span onClick={logout} style={{ color: `red`, cursor: `pointer` }}>
                            <li ><i className="fa-solid fa-right-from-bracket"></i> Logout</li>
                        </span>

                    </ul>

                </div>
            </div>
        </>
    )
}
export default AdminSidebar