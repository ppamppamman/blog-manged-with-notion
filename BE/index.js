const express = require("express");
const app = express();
const port = 3030;
const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: "",
});
const ENDPOINT_PUBLISH_LINK = "";

app.get("/", (req, res) => {});
app.get("/api/user", (req, res) => {
  const fetchNotionUser = async () => {
    const users = await notion.users.list({});
    res.send(users);
  };
  fetchNotionUser();
});

app.get("/api/databases", (req, res) => {
  const [databaseId] = ENDPOINT_PUBLISH_LINK.match(/(?<=site\/)(\w+)(?=\?v=)/g);
  const fetchNotionDatabase = async () => {
    const databases = await notion.databases.query({
      database_id: databaseId,
    });
    res.send(databases);
  };
  fetchNotionDatabase();
});

app.get("/api/page", (req, res) => {
  const fetchNotionPage = async () => {
    const pageId = "";
    const page = await notion.blocks.children.list({
      block_id: pageId,
    });
    res.send(page);
  };
  fetchNotionPage();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
