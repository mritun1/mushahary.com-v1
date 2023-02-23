import Header from "../../../component/admin/v2/Header";
import Side_bar from "../../../component/admin/v2/Side_bar";
import Link from "next/link";


const articles_dash = () => {
    return (
        <div>

            <div className="admin-page">

                <Header></Header>



                <div className="admin-body">
                    <Side_bar></Side_bar>

                    <div className="admin-body-right">


                        <main className="article-dash">

                            <div className="articles-dashboard">

                                <div className="article-dash-body1">

                                    <div className="article1">

                                        <h1>
                                            Photos Dashboard
                                        </h1>
                                    </div>

                                    <div className="article2">
                                        <div>
                                          <Link href="/admin/v2/photos_create">
                                          <button>
                                                Add new
                                            </button>
                                          </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="article-dash-body2">

                                    <div className="article-dash1">
                                        <div className="box3">
                                            <h4>
                                                Search
                                            </h4>
                                        </div>

                                        <div className="box4">
                                            <input type="text" placeholder="Type your search..." />
                                        </div>
                                    </div>

                                    <div className="article-dash2">

                                        <div className="boxx1"></div>

                                        <div className="boxx2">
                                            <div className="bo1">
                                                <h4>
                                                    This is the title of the text.
                                                </h4>
                                            </div>

                                            <div className="bo2">

                                                <button className="one">
                                                    View
                                                </button>

                                                <button className="two">
                                                    Edit
                                                </button>

                                                <button className="three">
                                                    Delete
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="article-dash2">

                                        <div className="boxx1"></div>

                                        <div className="boxx2">
                                            <div className="bo1">
                                                <h4>
                                                    This is the title of the text.
                                                </h4>
                                            </div>

                                            <div className="bo2">

                                                <button className="one">
                                                    View
                                                </button>

                                                <button className="two">
                                                    Edit
                                                </button>

                                                <button className="three">
                                                    Delete
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="article-dash2">

                                        <div className="boxx1"></div>

                                        <div className="boxx2">
                                            <div className="bo1">
                                                <h4>
                                                    This is the title of the text.
                                                </h4>
                                            </div>

                                            <div className="bo2">

                                                <button className="one">
                                                    View
                                                </button>

                                                <button className="two">
                                                    Edit
                                                </button>

                                                <button className="three">
                                                    Delete
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="article-dash2">

                                        <div className="boxx1"></div>

                                        <div className="boxx2">
                                            <div className="bo1">
                                                <h4>
                                                    This is the title of the text.
                                                </h4>
                                            </div>

                                            <div className="bo2">

                                                <button className="one">
                                                    View
                                                </button>

                                                <button className="two">
                                                    Edit
                                                </button>

                                                <button className="three">
                                                    Delete
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="article-dash2">

                                        <div className="boxx1"></div>

                                        <div className="boxx2">
                                            <div className="bo1">
                                                <h4>
                                                    This is the title of the text.
                                                </h4>
                                            </div>

                                            <div className="bo2">

                                                <button className="one">
                                                    View
                                                </button>

                                                <button className="two">
                                                    Edit
                                                </button>

                                                <button className="three">
                                                    Delete
                                                </button>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className="pestination">

                            <button className="pestination-box">
                          <h1>
                          &lt;
                          </h1>
                            </button>

                            <button className="pestination-box">
                                <h1>
                                1
                                </h1>
                            </button>

                            <button className="pestination-box">
                               <h1>
                               2
                               </h1>
                            </button>

                            <button className="pestination-box">
                              <h1>
                              3
                              </h1>
                            </button>

                            <button className="pestination-box">
                               <h1>
                               4
                               </h1>
                            </button>

                            <button className="pestination-box">
                           <h1>
                           &gt;
                           </h1>
                            </button>
                            </div>

                        </main>


                    </div>
                </div>

            </div>


        </div>

    );
}

export default articles_dash;




