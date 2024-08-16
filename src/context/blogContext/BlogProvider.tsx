import React, { PropsWithChildren, useReducer, useState } from "react";
import BlogContext from "./blog-context";
import { blogReducer } from "../../reducer/blog-reducer";

export const BlogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };
  return (
    <BlogContext.Provider value={{ blogPost: state, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
