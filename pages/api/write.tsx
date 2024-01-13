import { connectDB } from "@/util/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Write(request: NextApiRequest, response: NextApiResponse) {
  const db = (await connectDB).db('board');

  let result = await db.collection('post').insertOne({
    title: request.body.title,
    content: request.body.content,
  },
  { writeConcern: { w: "majority" } });
  response.status(300).json('/list');
}