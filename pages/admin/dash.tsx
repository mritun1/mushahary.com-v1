import Link from "next/link";
import AdminSidebar from "../../component/admin/common/AdminSidebar";

const dash = () => {
    return (
        <div>

            <div className="adminHead">
                <h1>Admin</h1>
            </div>

            <div className="adminBody">
                <AdminSidebar></AdminSidebar>
                <div className="adminContent">
                    
                    <h2>Dashboard</h2>

                </div>
            </div>

        </div>
    );
}

export default dash;