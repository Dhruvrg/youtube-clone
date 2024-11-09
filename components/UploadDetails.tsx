"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { UploadVideoValidation } from "@/lib/validation";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { createVideo } from "@/lib/actions/video.actions";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

interface UploadDetailsProps {
  onClose: () => void;
  url: string;
}

const UploadDetails: React.FC<UploadDetailsProps> = ({ onClose, url }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UploadVideoValidation>>({
    resolver: zodResolver(UploadVideoValidation),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UploadVideoValidation>) => {
    setIsLoading(true);

    try {
      await createVideo(values.title, values.description, url);
      toast.success("Video Created Successfully!");
    } catch (error) {
      console.log(error);
    }

    onClose();
    setIsLoading(false);
  };

  return (
    <div className="pb-6">
      <div className="flex items-center p-4 border-b-[1px] border-gray-500">
        <div className="font-bold text-xl">Details</div>
        <button
          className="p-1 border-0 hover:opacity-70 transition absolute right-6"
          onClick={() => onClose()}
        >
          <IoMdClose size={24} />
        </button>
      </div>
      <div className="flex px-6 pt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-6"
          >
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="title"
              label="Title"
              placeholder="Add a title that describes your video"
            />
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="description"
              label="Description"
              placeholder="Tell viewers about your video"
            />
            <Button
              className="bg-white text-black font-bold rounded-2xl"
              type="submit"
              disabled={isLoading}
            >
              Publish
            </Button>
          </form>
        </Form>
        <div className="bg-[#1e1c1cb3] rounded-xl ml-6">
          <video className="w-60 h-52" src={url} controls />
          <p className="text-gray-500 text-sm px-4 pt-4">Video link</p>
          <button className="w-52 text-blue-500 px-4 overflow-hidden whitespace-nowrap text-ellipsis">
            {url}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDetails;