"use server";

import { getComments } from "@/lib/actions/comment.actions";
import getCurrentUser from "@/lib/actions/getCurrentUser";
import React from "react";

interface Props {
  videoId: string;
}

const CommentSection: React.FC<Props> = async ({ videoId }) => {
  //   const comments = await getComments(videoId);
  //   const currentUser = await getCurrentUser();

  return (
    <div>
      {/* <p className="text-white font-bold text-xl mb-52">
        {comments?.length} Comments
      </p> */}
    </div>
  );
};

export default CommentSection;
