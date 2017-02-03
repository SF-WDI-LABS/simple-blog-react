import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App';
import './index.css';

const post = {
  title: "My First Post",
  author: "Joe Schmo",
  body: "Look at me I am a post.",
  comments: [
    "First!",
    "Great post",
    "Hire him"
  ]
}

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments} />,
  document.getElementById('root')
);
