import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setHistory, setCurrent } from '../../store/slices/historySlice';
import Spinner from '../Spinner/Spinner';
import { fetchAllPosts } from '../../store/creators/postCreator';

const Post = () => {
    const { history, current } = useSelector(state => state.history);
    const { posts: { postStatus, isError, posts } } = useSelector(state => state); // Adjust as per your state structure
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [dispatch]);

    useEffect(() => {
        const handleRouteChange = () => {
            const currentPath = window.location.pathname;
            dispatch(setCurrent(currentPath));
        };

        handleRouteChange();

        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, [dispatch]);

    const getShortValue = (word, id) => {
        if (word.length > 20) {
            return (
                <>
                    {word.substr(0, 20)} <Link to={`/posts/${id}`}>More...</Link>
                </>
            );
        } else {
            return word;
        }
    };

    const renderItem = (item) => {
        if (!item) {
            return null;
        }

        const { id, title, body } = item;

        return (
            <div className="post" key={id}>
                <strong>{id}</strong>
                <h1>{title}</h1>
                <p>{getShortValue(body, id)}</p>
                <Link to={`/posts/${id}`}>
                    <button>Details</button>
                </Link>
            </div>
        );
    };

    return (
        <>
            {postStatus === 'fulfilled' && posts.length > 0 ? (
                <div className="posts">
                    <h1>From: {current}</h1>
                    {posts.map(renderItem)}
                </div>
            ) : (
                <p>No posts available</p>
            )}
            {postStatus === 'pending' && <Spinner />}
            {postStatus === 'rejected' && (
                <div style={{ textAlign: 'center' }}>{isError}</div>
            )}
        </>
    );
};

export default Post;
