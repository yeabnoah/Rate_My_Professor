import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import DbConnection from "../../connection/mongoose";
import Professor from "@/model/professor";

// get all of the professors/Lecturers
export async function GET(request: NextRequest) {
  return NextResponse.json("welcome to the backend API");
}
