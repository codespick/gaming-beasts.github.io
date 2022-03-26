// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from "fs"
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/api/all-page-contents", async (req, res) => {
    let data = await fs.promises.readdir("pagecontents")
    // console.log(req.query.count);
    // data = data.slice(0, parseInt(req.query.count));
    let myfile;
    let allblogs = [];
    console.log('====================================');
    console.log(data);
    console.log('====================================');

    for (let index = 0; index < data.length; index++) {
        const items = data[index];
        // console.log(items);

        myfile = await fs.promises.readFile(("pagecontents/" + items))
        allblogs.push(JSON.parse(myfile))
        // allblogs.push(myfile)
        // return allblogs;
        // console.log(allblogs);
    }
    res.status(200).json(allblogs)


    // });
})
// async function All_Page_Contents(req, res) {
//     let data = await fs.promises.readdir("pagecontents")
//     // console.log(req.query.count);
//     data = data.slice(0, parseInt(req.query.count));
//     let myfile;
//     let allblogs = [];
//     console.log('====================================');
//     console.log(data);
//     console.log('====================================');

//     for (let index = 0; index < data.length; index++) {
//         const items = data[index];
//         // console.log(items);

//         myfile = await fs.promises.readFile(("pagecontents/" + items))
//         allblogs.push(JSON.parse(myfile))
//         // allblogs.push(myfile)
//         // return allblogs;
//         // console.log(allblogs);
//     }
//     res.status(200).json(allblogs)


//     // });
// }

app.listen(80)
