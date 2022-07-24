// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function All_Page_Contents(req, res) {
  let data = await fs.promises.readdir("1GbTo5GbGames");
  // console.log(req.query.count);
  data = data.slice(0, parseInt(req.query.count));
  let myfile;
  let allBlogContents = [];

  for (let index = 0; index < data.length; index++) {
    const items = data[index];
    // console.log(items);

    myfile = await fs.promises.readFile("1GbTo5GbGames/" + items);
    // console.log(myfile);
    allBlogContents.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogContents);
  // res.status(200).json(allBlogContents)
  // await runMiddleware(req, res, cors);

  // Rest of the API logic

  // });
}
