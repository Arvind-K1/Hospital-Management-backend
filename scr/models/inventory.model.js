import mongoose from "mongoose";


const inventorySchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        supplier: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        expirationDate: {
            type: Date,
        }
    },
    {
        timestamps: true
    }
)

export const Inventory = mongoose.model("Inventory",inventorySchema)