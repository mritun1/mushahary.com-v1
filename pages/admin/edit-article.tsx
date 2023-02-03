import AdminSidebar from "../../component/admin/common/AdminSidebar";
import Link from "next/link";

import { convertToHTML } from 'draft-convert';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { SetStateAction, useEffect, useState } from "react";
import { EditorState } from "draft-js";
const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((module) => module.Editor),
    {
        ssr: false,
    }
);

const Editarticle = () => {

    const [editorState,setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    
    const [convertedContent, setConvertedContent] = useState(null);

    useEffect(() => {
        const html = convertToHTML(editorState.getCurrentContent() as any);
        setConvertedContent(html as any);
    }, [editorState]);

    console.log(convertedContent);

    return (
        <div>
            <div>

                <div className="adminHead">
                    <h1>Admin</h1>
                </div>

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
                                            <select name="category" id="category">
                                                <option value="golang_patterns">Golang Patterns</option>
                                                <option value="golang_dsa">Golang DSA</option>
                                                <option value="golang_maths">Golang Maths</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Article Title</h6>
                                            <input type="text" name="title" id="title" placeholder="Article Title" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Article Description</h6>
                                            <textarea name="description" id="description" rows={3} placeholder="Write Article Description"></textarea>
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

                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Editarticle;




