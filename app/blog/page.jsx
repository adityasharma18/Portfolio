import BlogsTwo from "@/components/homes/blogs/BlogsTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";
import React from "react";

export const metadata = {
  title: "Blog || Aditya Sharma - AI/ML Student",
  description:
    "AI/ML enthusiast sharing learnings, projects, and thoughts on data science, machine learning, and tech growth.",
};

export default function Page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <BlogsTwo />
      </div>
    </>
  );
}
