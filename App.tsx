import IndexScreen from "./src/screens/IndexScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { BlogProvider } from "./src/context/blogContext/BlogProvider";

const navigator = createStackNavigator(
  {
    index: IndexScreen,
  },
  {
    defaultNavigationOptions: {
      title: "Blog",
    },
  },
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
