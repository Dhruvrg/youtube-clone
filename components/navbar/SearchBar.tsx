"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { SearchValidation } from "@/lib/validation";
import { Input } from "../ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SearchValidation>>({
    resolver: zodResolver(SearchValidation),
    defaultValues: { search: "" },
  });

  const onSubmit = async (values: z.infer<typeof SearchValidation>) => {
    setIsLoading(true);

    const search_query = values.search.replace("%20", "+");
    if (search_query) {
      router.push(`/results?search_query=${search_query}`);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-l-xl flex"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Search"
                  className="outline-none text-white bg-[#3d3d3d17] w-[30vw] h-10 text-semibold border-gray-700 rounded-l-3xl"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#212121] flex justify-center items-center w-16 h-10 border-gray-700 border rounded-r-3xl"
        >
          <HiMagnifyingGlass className="text-lg" />
        </button>
      </form>
    </Form>
  );
};

export default SearchBar;
