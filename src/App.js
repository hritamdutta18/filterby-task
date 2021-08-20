import { useState, useEffect } from "react"
import Header from './components/Header'
import Posts from './components/Posts'
import ByDate from './components/ByDate'
import ByLocation from './components/ByLocation'
import LikedPosts from './components/LikedPosts'
import DateContent from './components/DateContent'
import LocationContent from './components/LocationContent'
import Footer from './components/Footer'

function App() {
  const [showDateContent, setShowDateContent] = useState(false);
  const [showLocContent, setShowLocContent] = useState(false);
  
  // const [posts, setPosts] = useState ([]);

  // useEffect (() => {
  //   const getPosts = async () => {
  //     const postsFromServer = await fetchPosts();
  //     setPosts (postsFromServer);
  //   }

  //   getPosts ();
  // }, [])

  // // Fetch All Posts
  // const fetchPosts= async () => {
  //   const res= await fetch ('http://localhost:5000/posts');
  //   const data= await res.json();

  //   return data;
  // }

  // // Fetch a single Post
  // const fetchPost= async (id) => {
  //   const res= await fetch (`http://localhost:5000/posts/${id}`);
  //   const data= await res.json();

  //   return data;
  // }

  return (
    <div className="container">
      <Header />
      <ByDate onToggle= {() => setShowDateContent(!showDateContent)}/>
      {showDateContent && <DateContent/>}

      <ByLocation onToggle= {() => setShowLocContent(!showLocContent)}/>
      {showLocContent && <LocationContent/>}

      <LikedPosts />      

      {/* {Posts.length > 0 ? (
        <Posts
          posts= {posts} 
        />) 
      : 
      ('Nothing to Show !')} */}
        
      <Footer />
    </div>
  );
}
 
export default App;
