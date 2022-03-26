// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"
export default function Hello1(req, res) {

    // fs.readFile(`pagecontents/${req.query.slug}.json`, "utf-8", (err, data) => {
    //     if (err) {
    //         res.status(500).json({ error: "Internal server error" })
    //     }
    //     // console.log(JSON.parse(data))
    //     res.status(200).send(JSON.parse(data));
    // });
    fs.readFile(`1GbTo5GbGames/${req.query.slug}.json`, "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Internal server error" })
        }
        // console.log(JSON.parse(data))
        res.status(200).send(JSON.parse(data));
    });

}
