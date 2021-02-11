import mongoose from "mongoose";
 const Schema = mongoose.Schema;


export const PaviSchema  = new Schema({
    fps: {type: Number, required: true},
    captureDate: {type: String, required: true},
    duration: {type: Number, required: true},
    fileName: {type: String, required: true},
    format : {type: Number, required: true},
    processing: [
        {
            algorithm: { type: String, required: true},
            detection: {
                frame: {type: Number, required: true},
                objects: {
                    objectType: { type: String, required: true},
                    boxed: {type: String, required:true},
                    count: {type: Number, required:true}
                }
            }
        }
    ]
})

const paviModel = mongoose.model('PAVI',PaviSchema);
export default paviModel;