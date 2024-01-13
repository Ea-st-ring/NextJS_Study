import { connectDB } from "@/util/db";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {

  const db = (await connectDB).db('board');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}