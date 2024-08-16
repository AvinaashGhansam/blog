import { BlogType } from "./blog-type";

export interface BlogContextType {
  blogPost: BlogType[];
  addBlogPost: () => void;
}
