// PostContext.js
import React, { createContext, useState, useEffect,useContext } from 'react';
import axios from 'axios';

// Mock veritabanı
// let mockDb = {
//     posts: []
// };

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
     const [posts, setPosts] = useState([]);
    // const [posts, setPosts] = useState(mockDb.posts); 

    const fetchPosts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/posts');
            setPosts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const addPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };
  

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
};