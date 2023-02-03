import Header from "../../../component/admin/v2/Header";
import Side_bar from "../../../component/admin/v2/Side_bar";

const dash = () => {
    return (
        <div>

            <div className="admin-page">

                <Header></Header>



                <div className="admin-body">
                   <Side_bar></Side_bar>

                    <div className="admin-body-right">
                        <div>
                            <h1>
                                Dashboard
                            </h1>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h2>
                                            745
                                        </h2>
                                        <p>
                                            Articles
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h2>
                                            745
                                        </h2>
                                        <p>
                                            Photos
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    );
}

export default dash;