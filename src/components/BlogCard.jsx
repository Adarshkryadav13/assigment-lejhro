import { Link } from "react-router-dom";
import React from "react";
const BlogCard = ({ post }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg transition">
    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
    <p className="text-sm text-gray-500 mb-2">{post.createdAt}</p>
    <p className="text-gray-700 line-clamp-3">{post.content}</p>
    <Link to={`/blogs/${post.id}`} className="text-blue-600 underline mt-2 inline-block">
      Read more
    </Link>
  </div>
);
export default BlogCard;