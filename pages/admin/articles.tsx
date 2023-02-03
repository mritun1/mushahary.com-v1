import AdminSidebar from "../../component/admin/common/AdminSidebar";
import Link from "next/link";

const articles = () => {
    return (
        <div>
            <div>

                <div className="adminHead">
                    <h1>Admin</h1>
                </div>

                <div className="adminBody">
                    <AdminSidebar></AdminSidebar>
                    <div className="adminContent">

                        <div className="contTitle">
                            <h2>
                                <i className="fa-solid fa-newspaper"></i> 
                                Articles 
                                <Link href={"/admin/edit-article"}>
                                    <button><i className="fa-solid fa-plus"></i> Create Article</button>
                                </Link>
                            </h2>
                        </div>

                        <div className="contTable">
                            <table>
                                <thead>
                                    <tr>
                                        <td>SL</td>
                                        <td colSpan={2}>Article Title</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>This is the name of the articles</td>
                                        <td>
                                            <h3>DSA Article</h3>
                                            <Link target={"_blank"} href="">
                                                <button><i className="fa-solid fa-eye"></i> View</button>
                                            </Link>
                                            <Link href="/admin/edit-article">
                                                <button><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                                            </Link>
                                            <button><i className="fa-solid fa-trash"></i> Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default articles;