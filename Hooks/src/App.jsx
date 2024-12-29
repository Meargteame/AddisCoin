import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [selectedId,setSelectedId] =useState([1]);
  return(

    <div>
      <button onClick={function(){
        setSelectedId(1)
      }}>1</button>
      <button onClick={function(){
        setSelectedId(2)
      }}>2</button>
      <button onClick={function(){
        setSelectedId(3)
      }}>3</button>

      <ToPost id={selectedId}/>
    </div>

  )
}

function ToPost({id}){
  const [posts, setPosts] = useState([]);
  console.log(id)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((res)=>{
        setPosts(res.data);
      })
  },[id])
  
  return (
    <>
    {posts.map((post) => (
      <Post key={post.id} title={post.title} body={post.body}/>
    ))}
    </>
  )
}


function Post({title,body}){
  return <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
}
export default App
