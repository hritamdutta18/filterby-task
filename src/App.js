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
  
  const [posts, setPosts] = useState ([]);

  useEffect (() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts (postsFromServer);
    }

    getPosts ();
  }, [])

  // Fetch All Posts
  const fetchPosts= async () => {
    const res= await fetch ('https://my-json-server.typicode.com/hritamdutta18/fake_api_task/posts');
    const data= await res.json();

    return data;
  }

  return (
    <div className="container">
      <Header />
      <ByDate onToggle= {() => setShowDateContent(!showDateContent)}/>
      {showDateContent && <DateContent/>}

      <ByLocation onToggle= {() => setShowLocContent(!showLocContent)}/>
      {showLocContent && <LocationContent/>}

      <LikedPosts />      

      {posts.length > 0 ? (
        <Posts
          posts= {posts} 
        />) 
      : 
      ('Nothing to Show !')}
        
      <Footer />
    </div>
  );
}
 
export default App;
