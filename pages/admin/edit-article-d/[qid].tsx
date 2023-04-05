import AdminSidebar from "../../../component/admin/common/AdminSidebar";
import Link from "next/link";
import { convertFromHTML, convertToHTML } from 'draft-convert';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { HtmlHTMLAttributes, SetStateAction, useEffect, useRef, useState } from "react";
import { ContentState, convertFromRaw, convertToRaw, EditorState } from "draft-js";
import AdminHead from "../../../component/admin/common/AdminHead";
import Login from "../../../controllers/authentication/login";
import API_URL from "../../../controllers/backend/api_url";
import { useRouter } from "next/router";
import { pid } from "process";
import { HtmlContext } from "next/dist/shared/lib/html-context";
import { hasCookie } from "cookies-next";



const Editarticle = () => {

    //GET THE EDIT QUERY
    const router = useRouter()
    let { qid } =  router.query


    //GETTING THE EDITING CONTENT - START
    const [convertedContent, setConvertedContent] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        id: '',
        photo_url: '',
    });
    
    const getEditData = async () => {
        try {
            const res = await API_URL.get("/api/v1/articles/getById/" + qid)
            if (res.data.status === 200){
                setFormData(prevState => ({
                    ...prevState,
                    title: res.data.data.TITLE,
                    description: res.data.data.DES,
                    id: res.data.data.ID,
                    photo_url: res.data.data.PHOTO_URL,
                }))

            }
            
            const htmlString = String(res.data.data.CONTENT);
            const ct = convertFromHTML(htmlString);
            setEditorState(() => EditorState.createWithContent(ct))
            
        } catch (error) {
            console.log(error)
        }
    }
    //GETTING THE EDITING CONTENT - END

    const Editor = dynamic(
        () => import("react-draft-wysiwyg").then((module) => module.Editor),
        {
            ssr: false,
        }
    );

   

    //GET ALL THE LISTS OF ARTICLE CATEGORIES
    const [catList, setCatList] = useState([])
    const getCatList = async () => {
        try {
            const res = await API_URL.get("/api/v1/articles/cat")
            setCatList(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    );
    
    useEffect(() => {
        const html = convertToHTML(editorState.getCurrentContent() as any);
        setConvertedContent(html as any);
    }, [editorState]);

    useEffect(() => {
        getEditData();
        getCatList();

    }, []);


    //THE VALUE OF EDITOR
    //console.log(convertedContent);

    //FORM SUBMIT START
    const [selectedOption, setSelectedOption] = useState(0);
    const handleSelectChange = (event: any) => {
        setSelectedOption(parseInt(event.target.value));
    };

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    };
   
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        

        API_URL.put('/api/v1/articles/edit', {
            category_id: selectedOption,
            title: formData.title,
            des: formData.description,
            content: convertedContent,
            id: formData.id,
            thumbnail: "",
            photo_url: formData.photo_url,
        })
            .then((response) => {
                console.log(response.data);
                console.log(response.data.status)
                if (response.data.status == 200) {
                    //REDIRECT TO ARTICLE LISTS
                    window.location.href = "/admin/articles"
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //FORM SUBMIT END

    // function selectedOutput(catID:any){
    //     if(catID == 7){
    //         return "selected"
    //     }
    // }

    return (
        <div>
            <div>

                <AdminHead />

                <div className="adminBody">
                    <AdminSidebar></AdminSidebar>
                    <div className="adminContent">

                        <div className="contTitle">
                            <h2>
                                <i className="fa-solid fa-newspaper"></i>
                                Edit Article
                                <Link href={"/admin/articles"}>
                                    <button><i className="fa-solid fa-arrow-left"></i> Go Back</button>
                                </Link>
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                        <div className="contTable">
                            <table className="editTable">
                                <thead>
                                    <tr>
                                        <td>
                                            <h2>Write your Article</h2>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h6>Article Category</h6>
                                            <select value={selectedOption} onChange={handleSelectChange} name="category" id="category">
                                                <option >SELECT CATEGORY</option>
                                                {catList.map(cats => {
                                                    const { ID, CATEGORY_NAME } = cats
                                                    return <option  key={ID} value={ID}>{CATEGORY_NAME}</option>
                                                })}

                                            </select>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td>
                                                <h6>Article Thumbnail</h6>
                                                <img src="https://i.ytimg.com/vi/Iq2qT0fRhAA/maxresdefault.jpg" style={{height:`200px`,width:`auto`}} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Article Thumbnail URL</h6>
                                                <input type="text" name="photo_url" id="photo_url" value={formData.photo_url} onChange={handleInputChange} placeholder="Url of photos" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Thumnail Photo Option</h6>
                                                <input type="text" disabled value={"photo_url"} />
                                            </td>
                                        </tr>
                                    <tr>
                                        <td>
                                            <h6>Article Title</h6>
                                            <input value={formData.title} onChange={handleInputChange} type="text" name="title" id="title" placeholder="Article Title" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Article Description</h6>
                                            <textarea value={formData.description} onChange={handleInputChange} name="description" id="description" rows={3} placeholder="Write Article Description"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Article Content</h6>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={setEditorState}
                                                toolbarClassName="editor-toolbar-class"
                                                editorClassName="editor-cont-class"
                                            />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="rt-submit"><i className="fa-sharp fa-solid fa-paper-plane"></i> Submit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Editarticle;




function htmlToDraft(html: any) {
    throw new Error("Function not implemented.");
}

function stateFromHTML(html: any) {
    throw new Error("Function not implemented.");
}

