import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({

    userId : String,

    items : Array,

    amount : Number,

    address : Object,

    status : {
        type : String,
        default : "Processing"
    },

    payment : {
        type : Boolean,
        default : false,
    },

    paymentmethod : String,

    date : {
        type : Number,
        default : Date.now(),
    },

})

const OrderModel = mongoose.model("order", OrderSchema)