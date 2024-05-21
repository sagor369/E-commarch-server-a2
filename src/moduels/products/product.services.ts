import { TProduct } from "./product.interface";
import {ProducModel} from "./product.model";


const postProduct = async (payload:TProduct) =>{
    const result = await ProducModel.create(payload)
    console.log(result)
    return result

}

export const ProductServices = {
    postProduct
}