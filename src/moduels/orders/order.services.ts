import { Torder } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrder = async(payload:Torder) =>{
    const result = OrderModel.create(payload)
    return result
}



export const orderServices = {
    createOrder
}