"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const Blogspages = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPages(data);
    };
    Blogspages();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-center text-danger">My Blogs</h1>
      <ul className="list-group ">
        {pages.slice(0, 10).map((val, key) =>
          <li key={val.id}>
            <Link href={`/blog/${val.id}`} className=" text-primary list-group-item ">
              {val.id}) {val.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Blog;
