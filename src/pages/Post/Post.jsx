import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { setHistory, setCurrent } from '../../store/slices/historySlice';
const Post = () => {
    const [posts, setPosts] = useState([]);
    const { history, current } = useSelector(state => state.history);
    const dispatch = useDispatch()
    console.log(current);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
        console.log(current);


    }, []);


    useEffect(() => {

        const prevPath = window.location.pathname;

        return () => {
            const currentPath = window.location.pathname;
            if (prevPath !== currentPath) {
                dispatch(setCurrent('Post'))
                console.log('change!');

            }
        };
    }, []);



    function GetShortValue(word, id) {
        if (word.length > 20) {
            return (
                <>
                    {word.substr(0, 20)}{' '}
                    <Link to={`/posts/${id}`}>More...</Link>
                </>
            );
        } else {
            return word;
        }
    }

    return (
        <div className='posts'>
            {<h1>From: {current}</h1>}
            {
                posts.length !== 0 ? posts.map(item => (
                    <div className='post' key={item.id}>
                        <strong>{item.id}</strong>
                        <h1>{item.title}</h1>
                        <p>{GetShortValue(item.body, item.id)}</p>
                        <Link to={`/posts/${item.id}`}>
                            <button>Details</button>
                        </Link>
                    </div>
                )) : <p>Loading posts...</p>
            }
        </div>
    );
}

export default Post;