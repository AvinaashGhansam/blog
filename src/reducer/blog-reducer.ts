import { BlogType } from "../context/blogContext/types/blog-type";

export type State = BlogType[];

export type Action = { type: "add_blogpost" };
export function blogReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog post #${state.length + 1}` }];
    default:
      return state;
  }
}
