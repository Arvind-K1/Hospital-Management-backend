import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        patinetId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        },
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled'],
            default: 'pending'
        }
    },
    {
        timestamps: true
    }
)

export const Appointment = mongoose.model("Appointment",appointmentSchema)