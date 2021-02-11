import express, { Request, Response } from 'express';
import paviModel from './models/pavi'
import { processVideo } from './middleware/middleware'

const router = express.Router()

//Get's all the videos
router.post('/videos', [] ,(req: Request, res: Response)=>{
    //Call open vino so i can get the json it gives you and then save it.
    /**
     * Here the path should send you a file and the you pass it to the algorithm
     * You'll need to see how to load the video un download it. 
     */
    processVideo();
    const saveVideo = new paviModel(req.body)
    saveVideo.save()
    .then((result)=> res.send(result))
    .catch((error)=> console.log(error))

    // return newVideo.save().then(()=> console.log("saved")).catch((error)=>console.log(error))
})

//Process uploaded video 
router.get('/process_video/id', (req: Request, res: Response)=>{
    return res.send('Here you make something to process the video')
})

export { router as videosRouter }
