import { TProduct } from "./product.interface";
import { ProducModel } from "./product.model";

const postProduct = async (payload: TProduct) => {
  const result = await ProducModel.create(payload);

  return result;
};

const getProduct = async (data: unknown) => {
  if (typeof data === "string") {
    const result = await ProducModel.aggregate([{
        $match:{$and:[ {isDelete:false}, { $text: { $search: data }, } ]}
    }]);
    return result;
  } else {
    const result = await ProducModel.find({ isDelete: false });
    return result;
  }
};

const getSingleProduct = async (id: string) => {
  const result = await ProducModel.find({ _id: id, isDelete: false });
  console.log(result);
  if (result.length < 1) {
    return null;
  }
  return result;
};

const putProduct = async (id: string, data: number) => {
  const _id = { _id: id };
  const setQuantity = { $set: { "inventory.quantity": data } };

  const result = ProducModel.findOneAndUpdate(_id, setQuantity);
  return result;
};

const deleteProduct = async (id: string) => {
  const _id = { _id: id };
  const isDelete = { $set: { isDelete: true } };

  const result = ProducModel.findOneAndUpdate(_id, isDelete);
  return result;
};

export const ProductServices = {
  postProduct,
  getProduct,
  getSingleProduct,
  putProduct,
  deleteProduct,
};
