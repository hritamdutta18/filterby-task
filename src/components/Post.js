const Post = ({ post}) => {
    return (
        <div className= 'post'>            
            <div className= "postdiv">
                <h4>{post.title}</h4><br/>
                <h6>Date: {post.date}</h6>
                <h5><i>Location : {post.location}</i></h5> 
            </div>   
            <img src= {post.image}/>           
        </div>
    )
}

export default Post;
