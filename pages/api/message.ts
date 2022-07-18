import { NextApiRequest, NextApiResponse } from "next";
import { getData, connectDatabase } from "../../helpers/database";

export default async function add(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const documents = await getData("messages");
    res.status(200).json({ messages: documents });
  } else if (req.method === "POST") {
    const { title, message } = req.body;
    const store = await connectDatabase();

    const db = store.db();
    const add = await db.collection("messages").insertOne({ title, message });

    if (add) {
      res.status(200).json({ message: "ok" });
    } else {
      res.status(400).json({ message: "fail" });
    }
    store.close();
  }
}
