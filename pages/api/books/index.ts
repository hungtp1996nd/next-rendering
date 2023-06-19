import { NextApiRequest, NextApiResponse } from "next";
import { sql } from '@vercel/postgres';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const { rows: books } = await sql`Select * from books`;
            res.status(200).json(books);
        } catch {
            res.status(400).json({});
        }
    }

    if (req.method === 'POST') {
        const newBook = `${req.body?.newBook}`
        const newBookId = Math.floor(Math.random() * (10000 - 100 + 1) + 100)
        try {
            await sql`Insert into books values(${newBookId}, ${newBook})`
            res.status(201).json({})
        } catch {
            res.status(400).json({});
        }
    }
    
}
