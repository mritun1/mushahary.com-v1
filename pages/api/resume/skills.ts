import * as fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    let data = await fs.promises.readdir("api_data/resume/skills");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++){
        const item = data[index];
        myfile = await fs.promises.readFile(("api_data/resume/skills/" + item),'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    res.status(200).json(allBlogs)
}