// import React, { Component } from 'react';

// class Posts extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: [],
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((data) => this.setState({ posts: data }))
//       .catch((err) => console.log(err));
//   }

//   render() {
//     const postItems = this.state.posts.map((post) => (
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     ));

//     return (
//       <div>
//         <h1>Posts</h1>
//         {postItems}
//       </div>
//     );
//   }
// }

// export default Posts;

import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(data);
      } catch (error) {
        // setError(error.message);
        console.log('Error:', err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {/* {error ? (
        <p>Error: {error}</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )} */}
    </div>
  );
};

export default Posts;
