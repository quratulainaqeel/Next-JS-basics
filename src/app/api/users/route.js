import { NextResponse } from "next/server";

export async function GET(req) {
  const user = [
    {
      name: "ali",
      Age: 88,
      sex: "male",
    },
    {
      name: "fakhir",
      Age: 8,
      sex: "male",
    },
    {
      name: "alina",
      Age: 18,
      sex: "female",
    },
  ];

  return NextResponse.json({ message: "user data", user }, { status: 200 , statusText:"hii"});
}

export async function POST(req) {
  console.log("its a post api");
  return NextResponse.json({ message: "post api" });
}
