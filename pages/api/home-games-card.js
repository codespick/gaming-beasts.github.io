// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"
export default async function index_games_card1(req, res) {

  let data = await fs.promises.readdir("gamescard")
  // console.log(req.query.count);
  data = data.slice(0, parseInt(req.query.count));
  let myfile;
  let allblogs = [];


  for (let index = 0; index < data.length; index++) {
    const items = data[index];
    // console.log(items);

    myfile = await fs.promises.readFile(("gamescard/" + items))
    allblogs.push(JSON.parse(myfile))
    // allblogs.push(myfile)
    // return allblogs;
    // console.log(allblogs);
  }
  res.status(200).json(allblogs)


  // });
}
