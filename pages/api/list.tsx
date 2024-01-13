import { connectDB } from "@/util/db";

export default async function List(request : any, response : any) {
  if (request.method == 'GET') {
    const db = (await connectDB).db('board');
    let result = await db.collection('post').find().toArray();
    return response.status(200).json(result);
  }
}