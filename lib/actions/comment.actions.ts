"use server";

import { prisma } from "@/prisma";
import getCurrentUser from "./getCurrentUser";

export async function createComment(messaage: string, videoId: string) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return;
    }
    await prisma.comment.create({
      data: {
        messaage,
        videoId,
        userId: currentUser?.id,
      },
    });
  } catch (error: any) {
    throw new Error(`Failed to create comment: ${error.message}`);
  }
}

export async function getComments(videoId: any) {
  try {
    const data = await prisma.comment.findMany({ where: { videoId: videoId } });
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch comments: ${error.message}`);
  }
}
