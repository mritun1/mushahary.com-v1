import Header from "../../../component/admin/v2/Header";
import Side_bar from "../../../component/admin/v2/Side_bar";

const articles_dash = () => {
    return (
        <div>

            <div className="admin-page">

                <Header></Header>



                <div className="admin-body">
                   <Side_bar></Side_bar>

                    <div className="admin-body-right">
                        <div>
                            <h1>
                                Articles Dashboard
                            </h1>
                        </div>

                       
                    </div>
                </div>

            </div>


        </div>

    );
}

export default articles_dash ;




