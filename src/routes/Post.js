import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {
    const { postId } = useParams();
    const [ post, setPost ] = useState('');
    
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${ postId }`;
        console.log(url);
        const fetchPost = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setPost(data);
        };
        fetchPost();
    }, [ postId ]);
    return (
        <div>
            <h2>記事のページ</h2>
            <div>
                <p>postId:{ post.id }</p>
                <p>タイトル:{ post.title }</p>
                <p>body:{ post.body }</p>
            </div>
        </div>
    );
}