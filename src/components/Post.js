const Post = ({ post, onDelete, onToggle }) => {
    return (
        <div className= {`post ${post.reminder ? 'reminder' : ''}`}>
            <h3>
                {post.text} 
                
            </h3>
            <p>{post.day}</p>    
        </div>
    )
}

export default Post;
