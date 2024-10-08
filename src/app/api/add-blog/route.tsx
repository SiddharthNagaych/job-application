import connectToDb from "@/app/database";
import Blog from "@/app/models";
import Joi from "joi";
import { NextResponse } from "next/server";




const AddNewBlog=Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
})



export async function Post(req:Request){
    try{
      await connectToDb();
      const extractBlogData=await req.json();
      const {title,description}=extractBlogData;
      const {error}=AddNewBlog.validate({
        title,description
      })

      if(error){
        return NextResponse.json({
           success:false,
           message:error.details[0].message
        })
      }
      const newlyCreatedBlogItem=await Blog.create(extractBlogData);
      if(newlyCreatedBlogItem){
        return NextResponse.json({
            success:true,
            message:"data created successfully"
        })
      }else{
        return NextResponse.json({
            success:false,
            message:'Something went wrong ! Please try again'
          })
      }




    }catch(error){
      console.log(error);
      return NextResponse.json({
        success:false,
        message:'Something went wrong ! Please try again'
      })
    }
}