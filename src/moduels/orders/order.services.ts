import { ProducModel } from "../products/product.model";
import { Torder } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrder = async(payload:Torder) =>{
  
    // const checkQuantity = await ProducModel.findOne({_id:payload.productId})
    // if(checkQuantity && checkQuantity?.inventory?.quantity < 1 && checkQuantity?.inventory?.quantity <= payload.quantity){
    //        console.log("nai")
    // }
    // else{
    //     console.log("ace")
    // }

    const result = await OrderModel.create(payload)
    return result
}

const getOrders = async(quaryData:unknown) =>{
    if(typeof quaryData === "string"){
        const result = await OrderModel.find({email: quaryData})
        return result
    }
    else{

        const result = await OrderModel.find()
        return result
    }

}



export const orderServices = {
    createOrder,
    getOrders
}