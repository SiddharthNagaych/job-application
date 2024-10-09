"use client";

import { useState } from "react";
import AddNewblog from "../add-new-blog";


function BlogOverview() {
  const intialBlogFormData = {
    title: "", 
    description: "",
  };
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(intialBlogFormData);

  const [openBlogDialog, setOpenBlogDialog] = useState(false);

  console.log(blogFormData);

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <AddNewblog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}


      />
      <div>Blog List Section</div>
    </div>
  );
}

export default BlogOverview;
