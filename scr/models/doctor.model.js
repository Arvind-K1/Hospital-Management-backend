import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        doctorDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        specialty: {
            type: String,
            required: true
        },
        // availability: {
        //     type: String,
        //     required: true
        // }
    },
    {
        timestamps: true
    }
)

export const Doctor = mongoose.model("Doctor",doctorSchema)