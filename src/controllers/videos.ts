import { Request, Response } from 'express';
import PaviDb from '../models/pavi';


//GET all the videos

export let getAll = (req: Request, res: Response)=>{
    PaviDb.find((err: any, videos: any)=>{
        if(err){
            return res.send(err)
        }
        return res.send(videos);

    })
}

//GET videos by id
export let getById = (req: Request, res: Response)=>{
    PaviDb.findById(req.params.id, (err: any, video: any)=>{
        if(err) return res.send(err)
        return res.send(video)
    })
}
//POST video to process
export let postVideo = (req: Request, res: Response)=>{
    let processedVideo = new PaviDb(req.body)
    processedVideo.save((err: any)=>{
        if(err) return res.send(err)
        return res.send("Succesfully posted video")
    })
}
//DELETE video 
export let deleteVideo = (req: Request, res: Response) =>{
    PaviDb.deleteOne({_id: req.params.id})

}
//PUT video