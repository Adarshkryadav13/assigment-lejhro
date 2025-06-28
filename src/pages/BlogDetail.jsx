import { useParams } from "react-router-dom";
import { blogPosts } from "../blogData";
import React from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === id);

  if (!blog) return <div className="p-6">Blog not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{blog.createdAt}</p>
      <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
        {blog.content}
      </div>
    </div>
  );
};
export default BlogDetail;