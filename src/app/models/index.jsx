import mongoose from "mongoose";
const blogSchema=new mongoose.Schema({
    title:String,
    description:String,
})

const Blog=mongoose.model.Blog ||mongoose.model("Blog",blogSchema);
export default Blog;