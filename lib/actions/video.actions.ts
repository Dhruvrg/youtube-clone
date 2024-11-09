"use server";

import { prisma } from "@/prisma";
import getCurrentUser from "./getCurrentUser";

export async function createVideo(
  title: string,
  description: string,
  url: string
) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return;
    }
    await prisma.video.create({
      data: {
        title,
        description,
        url,
        userId: currentUser?.id,
        name: currentUser?.name,
        image: currentUser?.image || "",
      },
    });
  } catch (error: any) {
    throw new Error(`Failed to create video: ${error.message}`);
  }
}

export async function fetchVideos() {
  try {
    return await prisma.video.findMany();
  } catch (error: any) {
    throw new Error(`Failed to fetch videos: ${error.message}`);
  }
}

export async function searchVideos(search_query: any) {
  try {
    const videos = await prisma.video.findMany({
      where: {
        title: {
          contains: search_query,
          mode: "insensitive",
        },
      },
    });
    return videos;
  } catch (error: any) {
    throw new Error(`Failed to search videos: ${error.message}`);
  }
}

export async function channelVideos(name: any) {
  try {
    const videos = await prisma.video.findMany({ where: { name: name } });
    return videos;
  } catch (error: any) {
    throw new Error(`Failed to fetch videos: ${error.message}`);
  }
}

export async function getVideoByID(id: any) {
  try {
    const data = await prisma.video.findUnique({ where: { id: id } });
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch video: ${error.message}`);
  }
}

export async function deleteVideo(id: string) {
  try {
    const deletedVideo = await prisma.video.delete({ where: { id: id } });
    return deletedVideo;
  } catch (error: any) {
    throw new Error(`Failed to delete video: ${error.message}`);
  }
}

export async function editVideo(
  id: string,
  title: string,
  description: string
) {
  try {
    const updatedVideo = await prisma.video.update({
      where: { id: id },
      data: {
        title: title,
        description: description,
      },
    });
    return updatedVideo;
  } catch (error: any) {
    throw new Error(`Failed to edit video: ${error.message}`);
  }
}
