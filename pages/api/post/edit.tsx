import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const edit = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method == "POST"){
  const db = (await connectDB).db("board");

  let result = await db.collection("post").updateOne(
    {
      _id: new ObjectId(request.body.id),
    },
    {
      $set: {
        title: request.body.title,
        content: request.body.content,
      },
    },
    { writeConcern: { w: "majority" } }
  );
  console.log(result);

  response.status(302).redirect("/list");
  } else {
    response.status(400).json("잘못된 접근입니다.");
  }

};

export default edit;
