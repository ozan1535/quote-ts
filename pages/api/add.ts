import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../helpers/database";

export default async function add(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { author, quote, year, month } = req.body;
    const store = await connectDatabase();

    const db = store.db();
    const add = await db
      .collection("authorquote")
      .insertOne({ author, quote, year, month });

    if (add) {
      res.status(200).json({ message: "ok" });
    } else {
      res.status(400).json({ message: "fail" });
    }
    store.close();
  }
}
