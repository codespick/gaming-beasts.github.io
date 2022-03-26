// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"
export default async function All_Page_Contents(req, res) {
    let data = await fs.promises.readdir("pagecontents")
    // console.log(req.query.count);
    data = data.slice(0, parseInt(req.query.count));
    let myfile;
    let allBlogContents = [];
    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');

    for (let index = 0; index < data.length; index++) {
        const items = data[index];
        // console.log(items);

        myfile = await fs.promises.readFile(("pagecontents/" + items))
        allBlogContents.push(JSON.parse(myfile))
        // allBlogContents.push(myfile)
        // return allBlogContents;
        // console.log(allBlogContents);
    }
    res.status(200).json(allBlogContents)


    // });
}
