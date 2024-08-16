import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import useBlog from "../context/blogContext/use-blog";
import BlogContext from "../context/blogContext/blog-context";

const IndexScreen: React.FC = () => {
  const { blogPost, addBlogPost } = useBlog();
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={blogPost}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default IndexScreen;
