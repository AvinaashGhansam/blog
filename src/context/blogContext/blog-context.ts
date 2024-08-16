import { createContext } from "react";
import { BlogType } from "./types/blog-type";
import { BlogContextType } from "./types/blog-context-type";

const BlogContext = createContext<BlogContextType | null>(null);
export default BlogContext;
