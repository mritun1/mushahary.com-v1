import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../component/common/footer'
import Header from '../../component/common/header'
import { useState } from 'react'

export default function Home(props: { allBlogs: []; }) {

    const [items] = useState(props.allBlogs);

    return (
        <div >
            <Head>
                <title>Mritunjoy Mushahary - Resume</title>
                <meta name="description" content="Mritunjoy Mushahary - Resume" />
                <link rel="icon" type="image/png" href="/../imgs/icons/profile.jpg" />
            </Head>

            <main className='container'>

                <Header />

                <div className="content">
                    <div className="content_middle">

                        <div className="c_title">
                            <h2>Resume</h2>
                        </div>

                        <div className="c_profile">
                            <div className="profile_left" >
                                <div className='profile_pic'></div>
                            </div>
                            <div className="profile_right">
                                <div className="profile_name">
                                    <h2>Mr. Mritunjoy Mushahary</h2>
                                </div>
                                <div className="profile_des">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Current Job:</td>
                                                <td>PHP Backend Developer (LAMP)</td>
                                            </tr>
                                            <tr>
                                                <td>Current Company:</td>
                                                <td>
                                                    72dragons
                                                    <Link className="company_links" target="_blank" href="https://72dragonsservices.com/">
                                                        More Details &gt;&gt;
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Technology:</td>
                                                <td>core PHP, MySQL, Apache, HTML5, CSS3</td>
                                            </tr>
                                            <tr>
                                                <td>Start From:</td>
                                                <td>May 15, 2022</td>
                                            </tr>
                                            <tr>
                                                <td>Current CTC:</td>
                                                <td>2.7 LPA</td>
                                            </tr>
                                            <tr>
                                                <td>Notice Period:</td>
                                                <td>3 Months</td>
                                            </tr>
                                            <tr>
                                                <td>My Ambition:</td>
                                                <td>To become Blockchain and ML/AI Engineer in Future.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="resume">
                            <div className="resume_heading">
                                <h3>SKILLs</h3>

                            </div>
                            <div className="resume_content">

                                <table>
                                    <tbody>

                                        

                                        <tr>
                                            <td>HTML5/CSS3:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half-stroke"></i>
                                            </td>
                                            <td>4 yrs exp.</td>
                                        </tr>

                                        <tr>
                                            <td>PHP:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>3 yrs exp.</td>
                                        </tr>
                                        <tr>
                                            <td>Golang (GO):</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>1 yrs exp.</td>
                                        </tr>
                                        <tr>
                                            <td>React.js/Next.js:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>1 yrs exp.</td>
                                        </tr>
                                        <tr>
                                            <td>JavaScript:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>3 yrs exp.</td>
                                        </tr>
                                        <tr>
                                            <td>MySQL:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>2 yrs exp.</td>
                                        </tr>
                                        <tr>
                                            <td>jQuery:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>1 yrs exp.</td>
                                        </tr>

                                        <tr>
                                            <td>Dart/Flutter:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>6 months exp.</td>
                                        </tr>
                                        <tr>
                                            <td>Vue.js/Nuxt.js:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>6 months exp.</td>
                                        </tr>
                                        <tr>
                                            <td>C/C++:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>3 months exp.</td>
                                        </tr>
                                        <tr>
                                            <td>XML/JSON:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>3 yrs exp.</td>
                                        </tr>
                                        <tr>
                                            <td>SEO:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>6 months exp.</td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Design:</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>1 yrs exp.</td>
                                        </tr>
                                        <tr>
                                            <td>Data Structure (DSA):</td>
                                            <td className='stars'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </td>
                                            <td>3 months exp.</td>
                                        </tr>
                                        <tr>
                                            <td>Libraries:</td>
                                            <td colSpan={2}>

                                                <span className='lib'>
                                                    <span>CSS</span>
                                                    <span>Bootstrap</span>
                                                </span>

                                                <span className='lib'>
                                                    <span>CSS</span>
                                                    <span>TailwindCSS</span>
                                                </span>

                                                <span className='lib'>
                                                    <span>PHP</span>
                                                    <span>Fast2sms.com API</span>
                                                </span>

                                                <span className='lib'>
                                                    <span>PHP</span>
                                                    <span>PHPmailer</span>
                                                </span>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tools:</td>
                                            <td colSpan={2}>
                                                <span className='tags'>SCSS/SASS</span>
                                                <span className='tags'>FTP/Putty/SSH</span>
                                                <span className='tags'>XAMPP/Apache2</span>
                                                <span className='tags'>Figma.com</span>
                                                <span className='tags'>AWS EC2/s3</span>
                                                <span className='tags'>Git/Github</span>
                                                <span className='tags'>Google Analytics</span>
                                                <span className='tags'>Google Search Console</span>
                                                <span className='tags'>Linux</span>
                                                <span className='tags'>Corntab/Cornjob</span>
                                                <span className='tags'>Shell Scripting</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="resume_heading">
                                <h3>PROJECTs</h3>
                            </div>
                            <div className="resume_projects">
                                <p>Here is the list of my Projects.</p>

                                <div className="project">
                                    <div className="project_head">
                                        <div className="project_head_text">
                                            <h4>
                                                72dragons.health
                                                <Link target="_blank" href="https://72dragons.health/">view &gt;&gt;</Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="project_content">
                                        <p>72dragons.health is website for APHA (American Public Health Association) Photos and Videos Gallery.</p>
                                        <p className='title'>Back-end Build in PHP & MySQL.</p>
                                        <ol className='ol'>
                                            <li>Login & Logout system in core PHP, for Admin.</li>
                                            <li>CRUD Operation API in PHP, for uploading Photos, Videos and Forms data.</li>
                                            <li>Connecting with Google Analytics, for getting website traffics.</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="project_head">
                                        <div className="project_head_text">
                                            <h4>
                                                Contract Tracking Tool

                                            </h4>
                                        </div>
                                    </div>
                                    <div className="project_content">
                                        <p>Contract Tracking Tool is a Private website for Company&apos;s Employees used only. Here, every functional and area manager can see the details of the employees under him. i.e., when the employee is hired and when his contract will expire.</p>
                                        <p className='title'>Back-end Build in PHP & MySQL.</p>
                                        <ol className='ol'>
                                            <li>Here, my own PHP Web Framework is used. Please <Link href="https://github.com/mritun1/MritunjoYframe" target="_blank">Click Here</Link> to check my self-made PHP Web Framework.</li>
                                            <li>Login, Logout, Change Password and Forgot Password system for Admin or Managers.</li>
                                            <li>CRUD Operation API in PHP, for Add Employees and his details.</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="project_head">
                                        <div className="project_head_text">
                                            <h4>
                                                MRITUNJOY.COM
                                                <Link target="_blank" href="https://72dragons.health/">view &gt;&gt;</Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="project_content">
                                        <p>MRITUNJOY.COM is a Personal website created for sharing my own personal experiences.</p>
                                        <p className='title'>Front-end built in Next.js, Back-end built in Golang Fiber and MySQL database.</p>
                                        <ol className='ol'>
                                            <li>Golang Fiber Middleware for Authentication.</li>
                                            <li>Golang Fiber Rest API Admin can Login and Add new articles.</li>
                                            <li>Viewers can send Email to the admin directly from website&apos;s contact page.</li>
                                        </ol>
                                    </div>
                                </div>

                            </div>

                            <div className="resume_heading">
                                <h3>PROFILEs</h3>
                            </div>

                            <div className="resume_profiles">

                                <div className="social">
                                    <Image
                                        alt='LeetCode'
                                        height={20}
                                        width={20}
                                        src="/../public/imgs/social/LeetCode.png"
                                    />
                                    <Link href="https://leetcode.com/mritunjoy/" target="_blank">
                                        LeetCode/mritunjoy
                                    </Link>
                                </div>

                                <div className="social">
                                    <Image
                                        alt='Github'
                                        height={20}
                                        width={20}
                                        src="/../public/imgs/social/github.png"
                                    />
                                    <Link href="https://github.com/mritun1" target="_blank">
                                        Github/mritun1
                                    </Link>
                                </div>

                                <div className="social">
                                    <Image
                                        alt='LinkedIn'
                                        height={20}
                                        width={20}
                                        src="/../public/imgs/social/linkedin.png"
                                    />
                                    <Link href="https://www.linkedin.com/in/mritunjoy8011/" target="_blank">
                                        LinkedIn/mritunjoy8011
                                    </Link>
                                </div>

                                <div className="social">
                                    <Image
                                        alt='Facebook'
                                        height={20}
                                        width={20}
                                        src="/../public/imgs/social/facebook.png"
                                    />
                                    <Link href="https://www.facebook.com/mritunjoy8011" target="_blank">
                                        Facebook/mritunjoy8011
                                    </Link>
                                </div>

                                <div className="social">
                                    <Image
                                        alt='Twitter'
                                        height={20}
                                        width={20}
                                        src="/../public/imgs/social/twitter.png"
                                    />
                                    <Link href="https://twitter.com/mritunjoy8011" target="_blank">
                                        Twitter/mritunjoy8011
                                    </Link>
                                </div>

                                <div className="social">
                                    <Image
                                        alt='Golang Forum'
                                        height={20}
                                        width={20}
                                        src="/../public/imgs/social/golangbridge.png"
                                    />
                                    <Link href="https://forum.golangbridge.org/u/mritunjoy_mushahary/" target="_blank">
                                        GolangBridge/u/mritunjoy_mushahary/
                                    </Link>
                                </div>

                            </div>

                            <div className="resume_heading">
                                <h3>
                                    ADDRESS & CONTACT
                                    <Link href="">Send Email &gt;&gt;</Link>
                                </h3>
                            </div>

                            <div className="resume_address">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>PIN:</td>
                                            <td>783360</td>
                                        </tr>
                                        <tr>
                                            <td>Town/City:</td>
                                            <td>Gossaigaon</td>
                                        </tr>
                                        <tr>
                                            <td>Dist:</td>
                                            <td>Kokrajhar</td>
                                        </tr>
                                        <tr>
                                            <td>State:</td>
                                            <td>Assam</td>
                                        </tr>
                                        <tr>
                                            <td>Country:</td>
                                            <td>INDIA</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td>+91-8011501382</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>
                                                m.mushahary1@gmail.com
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="resume_heading">
                                <h3>
                                    Tools Used for Development
                                </h3>
                            </div>

                            <div className="resume_tools">
                                <p>Tools that helps me for Development.</p>
                                <div className='resume_tools_link'>
                                    <Link href="https://www.figma.com/" target="_blank">Figma.com</Link>
                                    <Link href="https://www.google.com/docs/about/" target={"_blank"}>Google Docs</Link>
                                    <Link href="https://www.google.com/sheets/about/" target={"_blank"}>Google Sheets</Link>
                                    <Link href="https://www.google.com/slides/about/" target={"_blank"}>Google Presentation</Link>
                                    <Link href="https://meet.google.com/" target={"_blank"}>Google Meet</Link>
                                    <Link href="https://css-tricks.com/the-shapes-of-css/" target={"_blank"}>CSS Tricks</Link>
                                    <Link href="https://www.gloomaps.com/" target={"_blank"}>Site-maping Tool</Link>
                                    <Link href="https://imgbox.com/" target={"_blank"}>Upload & Share Image Tool</Link>
                                    <Link href="https://jsfiddle.net/" target={"_blank"}>Sharing codes Tool</Link>
                                    <Link href="https://sharetext.me/" target={"_blank"}>Sharing Text Tool</Link>
                                    <Link href="https://quillbot.com/grammar-check" target={"_blank"}>Grammar Check</Link>
                                    <Link href="https://jsonlint.com/" target={"_blank"}>JSON Validator</Link>
                                    <Link href="https://fontawesome.com/icons" target={"_blank"}>Font-awesome Icons</Link>
                                    <Link href="https://www.flaticon.com/" target={"_blank"}>Flat Icons</Link>
                                    <Link href="https://www.remove.bg/" target={"_blank"}>Background Image Remover</Link>
                                    <Link href="https://www.rebasedata.com/convert-sql-to-csv-online" target={"_blank"}>.SQL to .CSV Converter</Link>
                                    <Link href="https://www.tutorialspoint.com/whiteboard.htm" target={"_blank"}>White board</Link>
                                    <Link href="https://jwt.io/" target={"_blank"}>JWT Token Validator</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <Footer />

            </main>



        </div>
    )
}
