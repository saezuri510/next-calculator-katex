import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const handler: NextApiHandler = async (req, res) => {
  const url = req.body;
  if (!(typeof url === "string")) {
    return res.status(404).send({ error: "page not found" });
  }

  try {
    if (req.method === "GET") {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle2" });
      const screenshot = await page.screenshot();
      await browser.close();
      res.setHeader("Content-Type", "image/png");
      res.setHeader("Cache-Control", "public, max-age=86400, immutable");

      return res.status(200).send(screenshot);
    } else {
      return res.status(405).send({ error: "Method not allowed" });
    }
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).send({ error: e.message });
    } else {
      return res.status(500).send({ error: String(e) });
    }
  }
};

export default handler;
