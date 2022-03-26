// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"
// import NextCors from 'nextjs-cors';
import Cors from 'cors'

const cors = Cors({
    methods: ['GET', 'HEAD'],
})
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}
export default async function All_Page_Contents(req, res) {
    let data = await fs.promises.readdir("1GbTo5GbGames")
    // console.log(req.query.count);
    data = data.slice(0, parseInt(req.query.count));
    let myfile;
    let allBlogContents = [];
    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    // );
    // let { method } = req
    // // This will allow OPTIONS request
    // if (method === "OPTIONS") {
    //     return res.status(200).send("ok");
    // }




    for (let index = 0; index < data.length; index++) {
        const items = data[index];
        // console.log(items);

        myfile = await fs.promises.readFile(("1GbTo5GbGames/" + items))
        allBlogContents.push(JSON.parse(myfile))
        // allBlogContents.push(myfile)
        // return allBlogContents;
        // console.log(allBlogContents);
    }
    // res.status(200).json(allBlogContents)
    await runMiddleware(req, res, cors)

    // Rest of the API logic
    res.status(200).json(allBlogContents)



    // });
}
