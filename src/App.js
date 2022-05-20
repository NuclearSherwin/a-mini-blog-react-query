import React, { useState } from 'react';
import './App.css';
import {useQuery} from 'react-query';
import Post from './Post';

const fetcher = url => fetch(url).then(res => res.json());
function App() {
  const [ postID, setPostID ] = useState(null);

  const { isLoading, data: posts } = useQuery('posts', () => fetcher(`https://jsonplaceholder.typicode.com/posts`));
  if(isLoading) return <h1>Loading...</h1>

  if(postID !== null){
    return <Post postID={postID} goBack={() => setPostID(null)} />
  }
  return (
    <div className='App'>
      {posts.map(post => {
        return <h1 key={post.id}>
            <a onClick={() => setPostID(post.id)} href="#">{post.id}-{post.title}</a>
          </h1>
      })}
    </div>
  )
}

export default App;
