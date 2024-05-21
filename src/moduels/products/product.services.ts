import { TProduct } from "./product.interface";
import {ProducModel} from "./product.model";


const postProduct = async (payload:TProduct) =>{
    const result = await ProducModel.create(payload)
    return result

}

const getProduct = async() =>{
    const result = await ProducModel.find()
    return result
}

const getSingleProduct = async(id: string) =>{
    const result = await ProducModel.findOne({_id: id})
    return result
}


const putProduct = async(id:string, data:number) =>{
    const _id = {_id: id}
    const setQuantity = {$set:{"inventory.quantity": data }}
    
    const result = ProducModel.findOneAndUpdate(_id, setQuantity)
    return result
}









export const ProductServices = {
    postProduct,
    getProduct,
    getSingleProduct,
    putProduct
}