import express, { Request, Response } from 'express';
import paviModel from './models/pavi'
import { processVideo } from './middleware/middleware'
import mongodb from 'mongodb'
import multer from 'multer';
const path = require('path');
import { uuid } from 'uuidv4';

const router = express.Router()
const storage = multer.diskStorage({
    destination: path.join(__dirname, "/public/uploads"),
    filename: function (req, file, cb) {
      const fullName =
        "file" + uuid().replace(/-/g, "") + path.extname(file.originalname);
      cb(null, fullName);
    },
  });
const videoFile = multer({ storage: storage})

//Get's all the videos
router.post('/videos/upload', videoFile.single('video') ,(req: Request, res: Response)=>{
    //Call open vino so i can get the json it gives you and then save it.
    /**
     * Here the path should send you a file and the you pass it to the algorithm
     * You'll need to see how to load the video un download it. 
     */
    res.json({
        success:true,
        video:{
            videos: ''
        }
    })

    // return newVideo.save().then(()=> console.log("saved")).catch((error)=>console.log(error))
})

//Process uploaded video 
router.get('/videos', (_, res: Response)=>{
    paviModel.find((err: any, pavi:any)=>{
        return err ? res.send(err) : res.send(pavi)
    })
})

router.get('/videos/:id/', (req: Request, res: Response)=>{
    paviModel.findById(req.params.id, (err: any, pavi:any)=>{
        return err ? res.send(err) : res.send(pavi)
    })
})

export { router as videosRouter }
