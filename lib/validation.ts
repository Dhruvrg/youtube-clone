import { z } from "zod";

export const SearchValidation = z.object({
  search: z
    .string()
    .min(1, "Type Something")
    .max(50, "Search must be at most 50 characters"),
});

export const UploadVideoValidation = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title must be at most 100 characters"),
  description: z
    .string()
    .min(2, "Description must be at least 5 characters")
    .max(100, "Description must be at most 100 characters"),
});
