import "./AddNewBlog.css";
import { useState } from "react";

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (!title) {
            alert('empty title');
            return;
        }
        if (!content) {
            alert('empty content');
            return;
        }
        console.log('check state',title,content)
    }

    return (
        <>
            
            <div className="form-container">
                <span>Add Blog</span>
                <div className="form-item">
                    <lable>Title</lable>
                    <input type="text"
                        value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    ></input>
                </div>
                <div  className="form-item">
                    <lable>Content</lable>
                    <input type="text"
                      value={content}
                    onChange={(e)=>{setContent(e.target.value)}}></input>
                </div>
                <button onClick={ handleSubmit }>Submit</button>
            </div>
        </>
    )
}

export default AddNewBlog;