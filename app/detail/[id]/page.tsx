import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function Detail(props: any) {
  console.log(props);
  const db = (await connectDB).db("board");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  if (!result) {
    result = {
      _id: new ObjectId("000000000000000000000000"),
      title: "존재하지 않는 게시글입니다.",
      content: "존재하지 않는 게시글입니다.",
    };
  }
  return (
    <div>
      <h4>상세 페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
