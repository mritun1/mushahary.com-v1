import Link from "next/link";

const AdminSidebar = () => {
    return(
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
                    </ul>

                </div>
            </div> 
        </>
    )
}
export default AdminSidebar