import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vishwkarmaarvind1222:arvind815317@completecoding.mdabdwf.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
