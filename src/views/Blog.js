import useFetch from "./customize/fetch";
import "./Blog.css"
import { Link } from "react-router-dom";

const Blog = () => {
    
  const {data: dataBlogs,loading,isError} = useFetch( `https://jsonplaceholder.typicode.com/posts`,false)
    console.log('check', dataBlogs)
    
    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0,12)
        console.log('check newData',newData)
    }
    return (
       
        <div className="blogs-container">
            <div className="blogs-row">
                {loading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="col-3">
                            <div className="single-blog">
                                <div className="main">
                                <div className="title">{item.title}</div>
                                <div className="content">{item.body}</div>
                                </div>
                                <button>
                                    <Link to={`/blog/${item.id}`}>
                                    View Detail </Link></button>
                            </div>
                        
                        </div>
               
                    )
                })}
                {
                    loading === true &&
                    <div style={{ width:'100%',textAlign:'center'}}> Crush not belong to me ...</div>
                }
             
            </div>
          
         </div>
    )
}

export default Blog;