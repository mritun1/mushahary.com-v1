import { useRef, useState } from "react";
import ArticlesHead from "../../../component/public/articles/ArticlesHead";



const photos = () => {

    const [modal_show, modal_init] = useState(false)


    return (
        <div>
            <div className="photos-home">

                <ArticlesHead></ArticlesHead>

                <div className="photos-home2">

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>

                    <a href="">
                        <button>
                            kokrajhar
                        </button>
                    </a>
                </div>



                {/* Navigation Bar End */}









                {/* Articles-read Start */}


                <div className="articles-read">


                    <div className="public-read-content1">

                        <div className="read-box1">

                            <div className="read-box-content">

                                <h1>
                                    This is the title of Articles
                                </h1>
                            </div>

                            <div className="read-box-content-item">


                                <div className="read-box-content-item1">

                                    <button>
                                        golang
                                    </button>

                                </div>

                                <div className="read-box-content-item2">



                                    <p>
                                        20 Jun 2021
                                    </p>
                                </div>

                            </div>

                        </div>


                        <div className="read-box2"></div>


                        <div className="read-box3">

                            <h2>
                                This is the title of the Articles
                            </h2>

                            <p>
                                This is the Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis laboriosam. Iusto.
                            </p>
                        </div>


                    </div>


                    <div 
                    
                    className="public-read-content2">


                        <div className="public-read-content-box1">

                            <h2>
                                Related
                            </h2>
                        </div>

                        <div className="public-read-content-box2">

                            <div className="read-img1"></div>

                            <div className="read-img2">

                                <p>
                                    This is the  title of the Articles
                                </p>
                            </div>

                        </div>



                        <div className="public-read-content-box2">

                            <div className="read-img1"></div>

                            <div className="read-img2">

                                <p>
                                    This is the  title of the Articles
                                </p>
                            </div>

                        </div>




                        <div className="public-read-content-box2">

                            <div className="read-img1"></div>

                            <div className="read-img2">

                                <p>
                                    This is the  title of the Articles
                                </p>
                            </div>

                        </div>


                    </div>


                </div>



                {/* Articles-read End */}

            </div>



        </div>
    );
}

export default photos;