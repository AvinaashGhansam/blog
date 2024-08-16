import { useContext } from "react";
import BlogContext from "./blog-context";

function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw Error("Blog cannot be used outside of <BlogProvider>");
  }
  return context;
}
export default useBlog;
// TODO: 136
