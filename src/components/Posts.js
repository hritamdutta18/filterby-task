import Post from './Post'

const Posts = ({ posts }) => {    
    return (
        <>
            <br/>
            <h2>Posts</h2>
            <br/>
            {posts.map ((post) => (
                <Post 
                    key= {post.id} 
                    post= {post}
                />
            ))}
        </>
    )
}

export default Posts;

