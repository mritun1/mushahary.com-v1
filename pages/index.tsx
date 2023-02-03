import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../component/common/footer'
import Header from '../component/common/header'
import { useState } from 'react'



//FUNTION FOR FETCHING SKILLS - START
export async function getServerSideProps() {
  let data = await fetch('http://localhost:3000/api/resume/skills')
  let allBlogs = await data.json()
  return {
    props: { allBlogs }
  }
}
//FUNTION FOR FETCHING SKILLS - END

export default function Home(props: { allBlogs: []; }) {

  const [items] = useState(props.allBlogs);
 
  return (
    <div >
      <Head>
        <title>Mritunjoy Mushahary - Personal website</title>
        <meta name="description" content="Mritunjoy Mushahary - Personal website" />
        <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />

        
      </Head>
      <style >{`
                  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

                  html,  body {
                      font-family: 'Roboto', sans-serif;
                  }
          
                  body {
                      margin: 0px;
                  }
          
                  .parent {
                      background-color: white;
                      border: 2px solid black;
                      /* height:1000px; */
          
                  }
          
                  .child {
                      background-color: #E6ECE5;
                      /* border: 2px solid black; */
                      /* height:900px; */
                      display: block;
                      width: 45%;
                      margin: auto;
                      padding: 5px;
                  }
          
                  .child1 {
                      background-color: #E6ECE5;
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height:150px; */
                      text-align: center;
          
                  }
          
                  .child1>p>a>button {
                      /* border:2px solid black; */
                      color: #4E6754;
                  }
          
                  .child1>p>a {
                      text-decoration: none;
                  }
          
                  .child1>p>a>button {
                      background: none;
                      border: none;
                  }
          
                  .child2 {
                      background-color: #E6ECE5;
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height: 150px; */
                  }
          
                  .elon-box1 {
                      background-color: #E6ECE5;
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height:60px; */
                  }
          
                  .elon {
                      background-color: #E6ECE5;
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height:60px; */
                      display: flex;
                      justify-content: center;
          
                  }
          
                  .elon-photo {
                      background-image: url(/imgs/photos/elon-musk-spacex-tesla-ceo-ovr8vqe9a8lo0dso.jpg);
                      background-size: cover;
                      background-repeat: norepeat;
                      background-position: center;
                      /* border: 2px solid black; */
                      margin: 3px;
                      height: 90px;
                      width: 90px;
                      border-radius: 50%;
                  }
          
                  .elon-box2 {
                      background-color: #E6ECE5;
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height: 50px; */
                      text-align: center;
                  }
                 
                  .elon-box2>p {
                      color: #4E6754;
                  }
          
                  .elon-box2>h1 {
                      margin-bottom: 0px;
                      color: #3C543B;
                  }
          
                  .elon-box2>hr {
                      background-color: #3EC943;
                  }
          
                  .child3 {
                      background-color: #BEDBB7;
                      padding: 5px;
                      border-radius: 6px;
                      margin: 8px;
                      /* padding-left:8px; */
                  }
          
                  .child3>h2 {
                      margin: 3px;
                      padding-left: 8px;
                      color: #3C543B;
                      /* border:2px solid black; */
                  }
                  .child3:hover {
                      background-color:#96a98f;
                  }
          
                  .child4 {
                      /* background-color: #97CB8E; */
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height: 150px; */
                      display: flex;
                  }
                 
                  .photo-box {
                      /* background-color: purple; */
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height:150px; */
                      flex: 3;
                      justify-content: center;
                      /* display: flex; */
                  }
                  .child4 > .photo-box:hover {
                      background-color:#96a98f;
                  }
          
                  .photo {
                      background-image: url("/imgs/photos/elon-musk-spacex-tesla-ceo-ovr8vqe9a8lo0dso.jpg");
                      background-size: cover;
                      background-repeat: norepeat;
                      background-position: center;
                      /* border: 2px solid black; */
                      height: 170px;
                      width: 170px;
                      border-radius: 50%;
                  }
          
                  .photo-a {
                      background-color: #97CB8E;
                      border-radius: 6px;
                      margin: 10px;
                  }
          
                  .p-box {
                      padding: 10px;
                      background-color: #97CB8E;
                      /* border:2px solid black; */
                      /* height:90px; */
                      margin: 3px;
                      text-align: center;
                  }
          
                  .p-box>h3>a {
                      /* border:2px solid black; */
                      text-decoration: none;
                      color: #3C543B;
                  }
          
                  .p-box>h3 {
                      margin: 0px;
                  }
          
                  .p-div {
                      background-color: #97CB8E;
                      /* border:2px solid black; */
                      /* height:90px; */
                      margin: 3px;
                      display: flex;
                      justify-content: center;
                      padding: 8px;
                  }
          
          
                  .child6 {
                      background-color: #E6ECE5;
                      /* border: 2px solid black; */
                      margin: 3px;
                      /* height: 150px; */
                      justify-content: center;
                      display: flex;
                      flex-wrap: wrap;
                  }
                  .child6 > .product:hover {
                      background-color:#96a98f;
                  }
          
                  .product {
                      background-color: #438541;
                      /* border: 2px solid black; */
                      /* height: 150px; */
                      margin: 3px;
                      width: 200px;
                      border-radius:6px;
                  }
          
                  .photos-content {
                      /* background-color: purple; */
                      /* border: 2px solid black; */
                      /* height:80px; */
                      margin: 3px;
                      justify-content: center;
                      display: flex;
                  }
          
                  .photos-frame {
                      background-image: url("/imgs/photos/elon-musk-spacex-tesla-ceo-ovr8vqe9a8lo0dso.jpg");
                      background-size: cover;
                      background-repeat: norepeat;
                      background-position: center;
                      /* border: 2px solid black; */
                      height: 80px;
                      margin: 3px;
                      width: 80px;
                      border-radius: 6px;
                  }
                  .second-box {
                      /* background-color: yellow; */
                      /* border: 2px solid black; */
                      /* height: 50px; */
                      margin: 3px;
                  }
                  .second-box > a {
                      text-decoration:none;
                  }
                  .second-box > a > h3 {
                      text-align:center;
                      margin:0px;
                      color:#B8E7C0;
                  }
                 .second-box >a > p{
                  text-align:center;
                  margin:0px;
                  color:#93A092;
                 }
                  .child7 {
                      background-color:#E6ECE5;
                      /* border: 2px solid black; */
                      margin: 3px;
                      height: 150px;
                      padding-top:90px;
                  }
                  .child7 > p {
                      /* background-color:#3EC943; */
                      /* border:2px solid black; */
                      margin:3px;
                      text-align:center;
                  }
                  .child7 > p:nth-child(2) {
                      /* background-color:#E6ECE5; */
                      /* border:2px solid black; */
                      margin:3px;
                      text-align:center;
                  }
        `}</style>

     <main>
        <div className="parent">

        <div className="child">

            <div className="child1">
                <p>
                    <a href="">
                        <button>
                            About us
                        </button>
                    </a>
                    <a href="">
                        <button>
                            Contact us
                        </button>
                    </a>
                    <a href="">
                        <button>
                            Terms & conditions
                        </button>
                    </a>
                    </p>

            </div>
            <div className="child2">
                <div className="elon-box1">
                    <div className="elon">
                        <div className="elon-photo"></div>
                    </div>
                </div>
                <div className="elon-box2">
                    <h1>
                        Mushahary Family-Site
                    </h1>
                    <p>
                        This is the personal website for the Mushahary family
                    </p>
                    <hr 
                    style={{
                      height:"5px", width:"80%"
                    }} />
                </div>
            </div>
            <div className="child3">
                <h2>
                    Our Team & Developers
                </h2>
            </div>
            <div className="child4">
                <div className="photo-box">
                    <div className="photo-a">
                        <div className="p-div">
                            <div className="photo"></div>
                        </div>
                        <div className="p-box">
                            <h3>
                                <a href="">
                                    Mritunjoy Mushahary
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="photo-box">
                    <div className="photo-a">
                        <div className="p-div">
                            <div className="photo"> </div>
                        </div>
                        <div className="p-box">
                            <h3>
                                <a href="">
                                    Pritom Mushahary
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="child3">
                <h2>
                  Our Service & Products
                </h2>
            </div>
            <div className="child6">
                <div className="product">
                    <div className="photos-content">
                        <div className="photos-frame"></div>
                    </div>
                    <div className="second-box">
                       <a href="">
                        <h3>
                            Photos
                        </h3>
                        <p>
                            300+
                        </p>
                       </a>
                    </div>
                </div>
                <div className="product">
                    <div className="photos-content">
                        <div className="photos-frame"></div>
                    </div>
                    <div className="second-box">
                       <a href="">
                        <h3>
                            Videos
                        </h3>
                        <p>
                            300+
                        </p>
                       </a>
                    </div>
                </div>
                <div className="product">
                    <div className="photos-content">
                        <div className="photos-frame"></div>
                    </div>
                    <div className="second-box">
                       <a href="">
                        <h3>
                            Articles
                        </h3>
                        <p>
                            300+
                        </p>
                       </a>
                    </div>
                </div>
                <div className="product">
                    <div className="photos-content">
                        <div className="photos-frame"></div>
                    </div>
                    <div className="second-box">
                        <a href="">
                            <h3>
                                Forum
                            </h3>
                            <p>
                                300+
                            </p>
                        </a>
                    </div>
                </div>
                <div className="product">
                    <div className="photos-content">
                        <div className="photos-frame"></div>
                    </div>
                    <div className="second-box">
                      <a href="">
                        <h3>
                            Tools
                        </h3>
                        <p>
                            300+
                        </p>
                      </a>
                    </div>
                </div>
                <div className="product">
                    <div className="photos-content">
                        <div className="photos-frame"></div>
                    </div>
                    <div className="second-box">
                      <a href="">
                        <h3>
                            Libraries
                        </h3>
                        <p>
                            300+
                        </p>
                      </a>
                    </div>
                </div>
            </div>
            <div className="child7">
                <p>
                    Designed & Developed by <b>Mushahary Family</b>
                </p>
                <p>
                    2022-2023
                </p>
            </div>
        </div>

    </div>
     </main>

      
      
    </div>
  )
}
