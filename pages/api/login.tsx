import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise
  const db = client.db('react-physics')

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  switch (req.method) {
    case 'POST':
      const collection = await db.collection('users')
      const user = await collection.findOne(req.body)

      console.log('USER FOUND', user)

      if (user) {
        res.status(200).json(user)
      }

      break
  }
}
