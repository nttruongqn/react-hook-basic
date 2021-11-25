import { useHistory, useParams } from "react-router"
import useFetch from "./customize/fetch";
import './DetailBlog.css';

const DetailBlog = () => {
    let { id }  = useParams();
    let history = useHistory();
    
    const handleBack = () => {
        history.push('/blog');
    }

    const {data: dataBlogDetail,loading,isError} = useFetch( `https://jsonplaceholder.typicode.com/posts/${id}`,false)


   console.log('Check data Blog: ',dataBlogDetail)
    return (
        <>
        <div><span onClick={()=>handleBack()}> &lt;--Back</span></div>    
            <div className="blog-detail">
                Hello blog with id = {id}

                {dataBlogDetail && 
                    <>
                    <div className="title"> Blog ID:{id}--- {loading === true ? 'Crush not be long to me....' : dataBlogDetail.title}</div>
                    <div className="content"> { dataBlogDetail.body}</div>
                </>
                }
            </div>
    </>
            )
}
export default DetailBlog