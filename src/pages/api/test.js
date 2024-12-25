// src/pages/api/test.js
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: 'Connected to MongoDB successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to MongoDB' });
  }
}
