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


                        <main className="article-create">

                            <div className="edit-article">

                                <div className="edit1">

                                    <div>
                                        <h1>
                                           <Link href="/admin/v2/articles_dash"> Article</Link> &gt; Edit Article
                                        </h1>
                                    </div>
                                </div>

                                <div className="edit2">

                                    <div className="title1">

                                        <div>
                                            <input type="text" placeholder="Title" /></div>

                                        <div>
                                            <textarea name="" id="" cols={30} rows={10} placeholder="Description"></textarea>
                                        </div>

                                    </div>

                                    <div className="title2">

                                        <div>
                                            <select name="" id="">
                                                <option value="">
                                                    honda
                                                </option>

                                                <option value="">
                                                    Kawasaki
                                                </option>

                                                <option value="">
                                                    KTM
                                                </option>
                                            </select>
                                        </div>

                                        <div></div>

                                        <div>

                                        </div>

                                        <div></div>
                                    </div>

                                </div>

                                <div className="edit3">

                                    <div className="content">

                                        <textarea name="content" id="content" cols={30} rows={10}  placeholder="Content"></textarea>
                                    </div>
                                </div>

                                <div className="edit4">

                                    <button>
                                        Save &amp; Publish
                                    </button>
                                </div>


                            </div>

                        </main>


                    </div>
                </div>

            </div>


        </div>

    );
}

export default articles_dash;




