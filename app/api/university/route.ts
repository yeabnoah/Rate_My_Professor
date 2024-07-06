import University from "@/model/university";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import DbConnection from "@/connection/mongoose";
import universityValidator from "@/validation/validateUniversity";

const dbIsConnected = DbConnection;

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    if (dbIsConnected.readyState === 1) {
      const universities = await University.find();
      return NextResponse.json(universities, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Database not connected" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    if (dbIsConnected.readyState === 1) {
      const body = await request.json();
      // Validate the request body using Zod
      const isValid = universityValidator.safeParse(body);

      if (isValid.success) {
        const newUniversity = new University(isValid.data);
        await newUniversity.save();
        return NextResponse.json(newUniversity, { status: 201 });
      } else {
        return NextResponse.json(
          { error: "Validation failed", details: isValid.error.errors },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Database not connected" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
