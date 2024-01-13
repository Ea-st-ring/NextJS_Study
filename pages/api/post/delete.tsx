import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const Delete = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method == "DELETE"){
  const db = (await connectDB).db("board");

  let result = await db.collection("post").deleteOne(
    {
      _id: new ObjectId(request.body.id),
    },
    { writeConcern: { w: "majority" } }
  );
  console.log(result);

  response.status(302).redirect("/list");
  } else {
    response.status(400).json("잘못된 접근입니다.");
  }

};

export default Delete;