"use client";
import { Fragment, use, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddNewBlogProps {
  openBlogDialog: boolean;
  setOpenBlogDialog: (open: boolean) => void;
  loading: boolean;
  setLoading: (open: boolean) => void;
  blogFormData: {
    title: string;
    description: string;
  };
  setBlogFormData: (data: { title: string; description: string }) => void;
}

function AddNewblog({
  openBlogDialog,
  setOpenBlogDialog,
  loading,
  setLoading,
  blogFormData,
  setBlogFormData,
}: AddNewBlogProps) {
  return (
    <Fragment>
      <div>
        <Button onClick={() => setOpenBlogDialog(true)}>Add new blog</Button>
      </div>

      <div></div>
      <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add NewBlog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placeholder="Enter Blog Title"
                id="title"
                value={blogFormData.title}
                className="col-span-3"
                onChange={(event) =>
                  setBlogFormData({
                    ...blogFormData,
                    title: event.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Enter the Details
              </Label>
              <Input
                id="description"
                defaultValue="@peduarte"
                className="col-span-3"
                name="description"
                placeholder="Enter the description you want"
                value={blogFormData.description}
                onChange={(event)=>setBlogFormData({
                    ...blogFormData,
                    description:event.target.value
                })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

export default AddNewblog;
