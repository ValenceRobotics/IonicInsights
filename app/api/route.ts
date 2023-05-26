import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest | null) {
  // const scouter = await prisma.scouter.create({
  //   data: {
  //     name: "John Doe",
  //     email: "john.doe@valencerobotics.org",
  //     password: "password",

  //   },
  // });

  // console.log(scouter);
  const scouter = await prisma.scouter.findMany();
  console.log(scouter);

  prisma.$disconnect();

  return NextResponse.json(scouter);
}

GET(null);
