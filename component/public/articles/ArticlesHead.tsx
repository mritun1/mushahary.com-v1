import { useState } from "react";



const ArticlesHead = () => {

    const [dropdownshow,menudropdown]=useState(false);
    function dropToggle(){
        menudropdown(!dropdownshow)
    }

    return (
        <div>



            <div className="photos-home1">

                <div className="photos-home-box1">

                    <div className="img"></div>

                    <div className="photos">
                        <h2>
                            Articles
                        </h2>
                    </div>

                </div>

                <div className="photos-home-box2">

                    <div className="ul">

                        <div className="mobile-btn">

                            <button onClick={dropToggle}>
                                <i className="fa-solid fa-bars"></i>
                            </button>

                          
                            <div 
                            style={{
                                display:dropdownshow?"block":"none"
                            }}
                            className="mobile-drop-down">

                            <ul>

                                <li>Home</li>

                                <li>mushahary.com</li>


                            </ul>
                        </div>

                        </div>

                        <ul className="nav_list">


                            <li>

                                <a href="">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </a>
                            </li>


                            <li>
                                <a href="/">
                                    Mushahary.com
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ArticlesHead;