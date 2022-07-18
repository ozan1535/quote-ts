import { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../helpers/database";

export default async function add(req: NextApiRequest, res: NextApiResponse) {
  const documents = await getData("authorquote");
  res.status(200).json({ authorquotes: documents });
}
