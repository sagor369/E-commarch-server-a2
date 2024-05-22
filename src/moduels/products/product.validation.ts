import { z } from "zod";

const inventoryValidatin = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const variantValidation = z.object({
  type: z.string(),
  value: z.string(),
});

const ProductValidation = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.string().array().optional(),
  variants: variantValidation.array(),
  inventory: inventoryValidatin,
  isDelete: z.boolean(),
});

export default ProductValidation
