import mongoose, {Document, Schema} from "mongoose";
import {nanoid} from "nanoid";

export interface IShortUrl extends Document {
    fullUrl: string;
    shortUrl: string;
    clicks: number;
}

const shortUrlSchema = new mongoose.Schema<IShortUrl>({
    fullUrl:{
        type: String,
        required: true,
    }, 
    shortUrl : {
        type: String,
        required: true,
        default: () => nanoid().substring(0, 10),
    },
    clicks: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})

export const urlModel = mongoose.model<IShortUrl>("ShortUrl", shortUrlSchema);