"use server";

import { prisma } from "@/prisma";

export async function fetchUser(name: any) {
  try {
    return await prisma.user.findFirst({ where: { name: name } });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function incrementSubscription(id: any) {
  try {
    await prisma.user.update({
      where: { id: id },
      data: { subscribers: { increment: 1 } },
    });

    return true;
  } catch (error: any) {
    throw new Error(`Failed to fetch or subscribe user: ${error.message}`);
  }
}
