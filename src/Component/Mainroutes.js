import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import BlogPostDetails from './BlogPostDetails';

const Mainroutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostDetails />} />
      </Routes>
    </React.Fragment>
  );
}

export default Mainroutes;
