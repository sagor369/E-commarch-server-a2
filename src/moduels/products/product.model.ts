import { Schema, model } from "mongoose";
import { Tinvertory, TProduct, Tvariant } from "./product.interface";


export const inventorySchema = new Schema<Tinvertory>({
    quantity: {
      type: Number,
      required: true
    },
    inStock: {
      type: Boolean,
      required: true
    }
  });
  
  export const variantSchema = new Schema<Tvariant>({
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  });
  
 export const productSchema = new Schema<TProduct>({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: [String]
    },
    variants: {
      type: [variantSchema],
      required: true
    },
    inventory: {
      type: inventorySchema,
      required: true
    }
  });



// productSchema.pre("find", function(){
//   console.log(this , "hello this id pore")
// })
// productSchema.post("find", function(){
//     console.log(this , "hello this id age")
// })

export  const ProducModel = model<TProduct>("product", productSchema)