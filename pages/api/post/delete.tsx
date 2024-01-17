import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const Delete = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method == "DELETE") {
    try {
      const db = (await connectDB).db("board");
      // parse를 통해 json 형태로 변환
      let id = JSON.parse(request.body).id;
      let result = await db.collection("post").deleteOne(
        {
          _id: new ObjectId(id),
        },
        { writeConcern: { w: "majority" } }
      );
      console.log("result는 ", result);
      if (result.deletedCount === 1) {
        response.status(302).redirect("/list");
      } else {
        response.status(400).json({ message: "fail" });
      }
    } catch (e) {
      response.status(500).json({ message: "error" });
    }
  } else {
    response.status(400).json("잘못된 접근입니다.");
  }
};

export default Delete;
