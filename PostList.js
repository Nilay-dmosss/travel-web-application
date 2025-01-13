
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './PostList.css';
import { PostContext } from './PostContext'; 
import Post from './Post'; 

const PostList = () => {
    const { posts } = useContext(PostContext); // Get post
    const [favorites, setFavorites] = useState([]);

    // Örnek postlar
    const examplePosts = [
        {
            title: "İlk Post",
            content: "Bu, ilk post içeriğidir.",
            author: "Yazar 1",
            image: "example1.jpg", // Örnek 
            createdAt: new Date().toISOString(),
        },
        {
            title: "İkinci Post",
            content: "Bu, ikinci post içeriğidir.",
            author: "Yazar 2",
            image: "example2.jpg", // Örnek 
            createdAt: new Date().toISOString(),
        },
        {
            title: "Üçüncü Post",
            content: "Bu, üçüncü post içeriğidir.",
            author: "Yazar 3",
            image: "example3.jpg", 
            createdAt: new Date().toISOString(),
        },
    ];

    // Eğer context'ten gelen postlar yoksa, örnek postları kullan
    const displayPosts = posts.length > 0 ? posts : examplePosts;

    const handleLike = (postId) => {
        // Implement like functionality here
    };

    const handleFavorite = (postId) => {
        const token = localStorage.getItem('token');
        if (!token) return alert('Please login to save favorites');
        
        axios.post(`http://localhost:5000/api/favorites/${postId}`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(() => {
            setFavorites([...favorites, postId]);
        }).catch(err => console.error(err));
    };

    return (
        <div className="post-list-container">
            <h1>Post Listesi</h1>
            {displayPosts.length === 0 ? (
                <p>Henüz hiç post yok.</p>
            ) : (
                displayPosts.map((post, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p><strong>Yazar:</strong> {post.author}</p>
                        {post.image && <img src={`http://localhost:5000/images/${post.image}`} alt={post.title} style={{ maxWidth: '300px' }} />}
                        <h5>{new Date(post.createdAt).toLocaleDateString()}</h5>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostList;