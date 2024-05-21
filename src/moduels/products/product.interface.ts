export type Tinvertory = {
  quantity: number;
  inStock: boolean;
};

export type Tvariant = {
  type: string;
  value: string;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags?: string[];
  variants: Tvariant[];
  invertory: Tinvertory;
};
