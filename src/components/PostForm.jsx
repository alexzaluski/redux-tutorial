import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      body,
    };

    try {
      const { data } = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        post
      );
      console.log(data);
      throw new Error('Something went wrong');
    } catch (err) {
      // setError(err.message);
      console.log('Error:', err.message);
    }
  };

  return (
    <div>
      <h1>Add Post</h1>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Body:</label>
          <br />
          <input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
