"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { UploadVideoValidation } from "@/lib/validation";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { editVideo } from "@/lib/actions/video.actions";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import useEditVideoModal from "@/hooks/useEditVideoModal";

const EditVideoModal = () => {
  const editVideoModal = useEditVideoModal();
  const { data, isOpen, onClose } = editVideoModal;
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UploadVideoValidation>>({
    resolver: zodResolver(UploadVideoValidation),
    defaultValues: {
      title: data.title,
      description: data.description,
    },
  });

  useEffect(() => {
    if (editVideoModal.data) {
      form.reset({
        title: editVideoModal.data.title,
        description: editVideoModal.data.description,
      });
    }
  }, [editVideoModal.data, form]);

  const onSubmit = async (values: z.infer<typeof UploadVideoValidation>) => {
    setIsLoading(true);

    try {
      await editVideo(data.id, values.title, values.description);
      toast.success("Video Updated Successfully!");
    } catch (error) {
      console.log(error);
    }

    onClose();
    setIsLoading(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-2/4 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full
      ${isOpen ? "translate-y-0" : "translate-y-full"}
      ${isOpen ? "opacity-100" : "opacity-0"}
    `}
        >
          <div className="pb-6 translate rounded-xl h-full lg:h-auto md:h-auto border border-gray-500 shadow-lg relative flex flex-col w-full bg-[#3d3d3d] outline-none focus:outline-none">
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
                    Update
                  </Button>
                </form>
              </Form>
              <div className="bg-[#1e1c1cb3] rounded-xl ml-6">
                <video className="w-60 h-52" src={data.url || ""} controls />
                <p className="text-gray-500 text-sm px-4 pt-4">Video link</p>
                <button className="w-52 text-blue-500 px-4 overflow-hidden whitespace-nowrap text-ellipsis">
                  {data.url || ""}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVideoModal;
