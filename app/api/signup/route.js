import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  await connectDB()
  const { fullname, email, password, imageurl } = await req.json()  // ✅ include imageurl

  if (!fullname || !email || !password) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 })
  }

  const userExists = await User.findOne({ email })
  if (userExists) {
    return new Response(JSON.stringify({ message: 'Email already in use' }), { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await User.create({
  fullname,
  email,
  password: hashedPassword,
  imageurl: imageurl || ''
})

  return new Response(JSON.stringify({ message: 'Signup successful' }), { status: 200 })
}
