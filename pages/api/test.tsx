export default function Test(request : any, response : any) {
  if (request.method == "POST") {
    console.log(request.body);
    return response.status(200).json({ name: "John Doe" });
  }
}