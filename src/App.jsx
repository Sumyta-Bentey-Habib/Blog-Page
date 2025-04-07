
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Navber from './components/navber/Navber'

function App() {
  const [bookmarked,setBookmarked]=useState([]);
const handelBookMark=(blog)=>{
  setBookmarked([...bookmarked,blog]);
}
  console.log(bookmarked);

  return (
    <>
     <Navber></Navber>
    
     <div className="flex text-center main-container ">
      <div className="left-container w-[70%]">
       
       <Blogs handelBookMark={handelBookMark}></Blogs>
        </div>
      <div className="right-container w-[30%]">
        <h1>Reading time : 0</h1>
        <h1>Bookmark count: 0</h1>
        {
          bookmarked.map((marked)=><p>{marked.title}</p>)
        }


      </div>
     </div>
    </>
  )
}

export default App
