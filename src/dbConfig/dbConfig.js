import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function Mongo_Connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("conenct success");
    } catch (error) {
        return NextResponse.json({ error: "Connection Failed" })
    }
}