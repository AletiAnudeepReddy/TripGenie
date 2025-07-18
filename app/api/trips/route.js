import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb' // your DB connection file
import Trips from '@/models/Trips'; // import the model

// POST: Add a new trip
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, from, to, days } = body;

    if (!email || !from || !to || !days) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newTrip = await Trips.create({ email, from, to, days });
    return NextResponse.json({ success: true, trip: newTrip }, { status: 201 });
  } catch (err) {
    console.error('POST error:', err);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

// GET: Fetch trips by email
export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email query param is required' }, { status: 400 });
    }

    const trips = await Trips.find({ email }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, trips }, { status: 200 });
  } catch (err) {
    console.error('GET error:', err);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
