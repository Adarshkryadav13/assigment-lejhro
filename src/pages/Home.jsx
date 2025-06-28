import { blogPosts } from "../blogData";
import BlogCard from "../components/BlogCard";
import React from "react";

const Home = () => (
  <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogPosts.map((post) => (
      <BlogCard key={post.id} post={post} />
    ))}
  </div>
);
export default Home;