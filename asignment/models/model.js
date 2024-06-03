import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        require:true,
    }
    
}, { timestamps: true });

const CustomerList = mongoose.model('CustomerTime', customerSchema);

export default CustomerList;