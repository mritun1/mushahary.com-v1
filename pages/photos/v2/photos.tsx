import { useRef, useState } from "react";
import PhotosHead from "../../../component/public/photos/PhotosHead";


const photos = () => {

const  [modal_show,modal_init] = useState(false)


    return (
        <div>
            <div className="photos-home">

               <PhotosHead></PhotosHead>


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



                <div className="photos-home3">

                    <h1>
                        Mushahary Family Photos
                    </h1>
                </div>



                <div className="photos-home4">

                    <div className="content-items">

                        <img  onClick={()=>modal_init(true)} src="/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg" alt="" />

                        <img src="/imgs/photos/audrey-grace-paul-JFelYZBGjjQ-unsplash.jpg" alt="" />

                    </div>

                    <div className="content-items">

                        <img src="/imgs/photos/elon-musk-spacex-vogue-2015-ivvpnrdw3n9mz2sc.jpg" alt="" />

                        <img src="/imgs/photos/elon-musk-tesla-motortrend-2019-925ssbgn380u4iky.jpg" alt="" />

                        <img src="/imgs/photos/elon-musk-tesla-motortrend-2019-925ssbgn380u4iky.jpg" alt="" />


                    </div>

                    <div className="content-items">

                        <img src="/imgs/photos/jc-gellidon-7KFVkL1cV0w-unsplash.jpg" alt="" />

                        <img src="/imgs/photos/thisisengineering-raeng-w_zE6qlkQKA-unsplash.jpg" alt="" />

                    </div>

                </div>

            </div>



            {/* Modal-box Start */}

            {
                modal_show? <div className="modal-box">


                <div className="opacity"></div>



                <div className="modal-container">

                    <div className="modal-content1">

                        <div className="title-box1">

                            <div className="photos-title-here">

                                <h1>
                                    Photos Title Here
                                </h1>
                            </div>

                            <div className="kokrajhar">

                                <button>
                                    Kokrajhar
                                </button>
                            </div>

                        </div>

                        <div className="title-box2">

                            <i className="fa-sharp fa-solid fa-circle-xmark" onClick={()=>modal_init(false)}></i>

                        </div>

                    </div>

                    <div className="modal-content2">




                        <div className="opacity-content">

                            <div className="img">

                                <img src="/imgs/photos/20160225173731-young-millionaire-sports-car-luxury-attire-businessman-rich-wealthy-lifestyle.jpeg" alt="" />



                                <div className="paragraph">

                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, veniam! Atque aperiam temporibus quis molest
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>:null
            }
           




            {/* Modal-Box  End */}
        </div>
    );
}

export default photos;