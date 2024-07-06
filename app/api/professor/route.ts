import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import DbConnection from "../../../connection/mongoose";
import Professor from "@/model/professor";
import validateProfessor from "@/validation/validateProfessor";
import University from "@/model/university";

const data = DbConnection.readyState;

// get all of the professors/Lecturers
export async function GET(request: NextRequest) {
  try {
    if (data == 1) {
      const professors = await Professor.find();

      return NextResponse.json(professors);
    }
  } catch (error) {}
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const isValid = validateProfessor.safeParse(body);

  // if (isValid.success == false) {
  return NextResponse.json({ message: "test" });
  // }

  // if (isValid.success == true) {
  // }

  // return NextResponse.json(isValid.data);
}
