// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
const notion = new Client({
  auth: "",
});
const ENDPOINT_PUBLISH_LINK = "";

// type Data = {
//   name: string;
// };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const fetchNotionPage = async () => {
    const pageId = "";
    const page = await notion.blocks.children.list({
      block_id: pageId,
    });
    res.status(200).send(page);
  };
  fetchNotionPage();
}
