import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { setCurrent } from '../../store/slices/historySlice';
import { current } from '@reduxjs/toolkit';
const PostDetails = () => {
    const [post, setPost] = useState(null)
    const params = useParams();
    const navigate = useNavigate()
    const previousPath = useSelector(state => state.posts.path);
    const dispatch = useDispatch()
    const {current } = useSelector((state)=>state.history)
    useEffect(() => {

        const prevPath = window.location.pathname;

        return () => {
            const currentPath = window.location.pathname;
            if (prevPath !== currentPath) {
                dispatch(setCurrent('PostDetials'))
                console.log('change!');

            }
        };
    }, []);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + `${params.id}`)
        .then((res) => {
            return res.json()
        }).then((data) => {
            setPost(data)
        })
    }, [])
    
    return (
        <div>
           <p>From: {current}</p>
            {post && (
                <div>
                    <button onClick={() => navigate(-1)}>Back</button>
                    <h1>{post.id}</h1>
                    <h1>{post.title}</h1>
                    <h1>{post.body}</h1>
                </div>
            )}
        </div>
    );
}

export default PostDetails;
