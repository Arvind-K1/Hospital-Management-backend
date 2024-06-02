import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        patientDetails : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        medicalHistory: {
            type: String
        },

    },
    {
        timestamps: true,
    }
)

export const Patient = mongoose.model("Patient",patientSchema)