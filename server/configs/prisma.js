import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

// Required for Neon in Node.js
neonConfig.webSocketConstructor = ws

const connectionString = process.env.DATABASE_URL

const adapter = new PrismaNeon({ connectionString })

const prisma = new PrismaClient({
  adapter,
})

export default prisma