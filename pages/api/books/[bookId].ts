import { NextApiRequest, NextApiResponse } from "next";
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const bookId = `${req.query?.bookId}`;
    if (req.method === 'GET') {
        try {
            const { rows: book } = await sql`Select * from books where id=${bookId}`
            res.status(200).json(book[0])
        } catch {
            res.status(400).json({})
        }
    }

    if (req.method === 'DELETE') {
        try {
            await sql`Delete from books where id=${bookId}`
            res.status(204).json({})
        } catch {
            res.status(400).json({})
        }
    }
}