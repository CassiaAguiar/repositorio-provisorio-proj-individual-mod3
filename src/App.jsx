import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import './App.css'


function App() {
  const [Body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts'
 
  useEffect( () => { 
    const getPosts = async () => {
      const {data: res} = await axios.get(apiEndPoint)
      setPosts(res)
    }
    getPosts()
  },[]  )

  //Inserindo o post - const
  const handPost = async () => {
    const post = {title: title, body: Body}
    await axios.post(apiEndPoint, post)
    setPosts([post, ...posts])
  }
  //Atualizando - put
  const handUpdate = async post => {
        post.title = title
        post.body = Body
        await axios.put(apiEndPoint + '/' + post.id)
        const postClone = [...posts] 
        const index = postClone.indexOf(post)
        postClone[index] =  { ...post }
        setPosts(postClone)
        }
  //deletar - delete
const handDelete = async post =>{
await axios.delete(apiEndPoint + '/' + post.id + post)
setPosts(posts.filter(p => p.id !== post.id))
}

const handlerTitle = (e) => {
  setTitle(e.target.value)
}
const handlerBody = (e) => {
  setBody(e.target.value)
}

  return (
    <div className="App">
      <br />
      <BaseMenu></BaseMenu>
      <BaseTable></BaseTable>
      <BaseTableF></BaseTableF>
      <BaseTableM></BaseTableM>
      <BaseTableC></BaseTableC>
      <BaseTableK></BaseTableK>
      <br />
    </div>
  );
}

export default App;