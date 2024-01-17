import { connectDB } from "@/util/db";
import Link from "next/link";
import ListItem from "./ListItem";

export const dynamic = 'force-dynamic';

export default async function List() {
  const db = (await connectDB).db("board");
  let result = await db.collection("post").find().toArray();
  result = result.map((a) => {
    a.stringId = a._id.toString();
    return a;
  });
  // result에서 _id 제거
  const props_result = result.map(({ _id, ...rest }) => rest);

  return (
    <div className="list-bg">
      <ListItem result={props_result} />
    </div>
  );
}
