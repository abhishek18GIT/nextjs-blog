import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      console.log(req.body)
      let data = await fs.promises.readdir('contactdata');
      res.status(200).json(req.body)
      fs.promises.writeFile('contactdata/1.json', JSON.stringify(req.body) , ()=>{})
    } else {
      // Handle any other HTTP method
      console.log('not the post one ')
      res.status(200).json({ name: 'John Doe' })
    }
  }