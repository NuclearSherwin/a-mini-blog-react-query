import React from "react";
import { useQuery } from "react-query";

const fetcher = url => fetch(url).then(res => res.json());

const Post = ({postID, goBack}) => {
    const {data, isLoading} = useQuery(['post', postID], () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postID}`));
    if(isLoading) {
        return <p>Loading post...</p>
    }

    return <div>
        <p>Active Post: {postID}</p>
        <a href="#" onClick={goBack} className='bg-cyan-500 shadow-md rouded my-4'>Go back</a>
        <p>{data.title}</p>
        <p>{data.body}</p>
    </div>
}

export default Post;