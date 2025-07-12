export interface IProductBody {
  user_id: number;
  uuid: string;
  id: number;
  image: string;
  product_name: string;
  category: string;
  created_at: string;
  description: string;
  price: number;
}

export interface IDetailProduct {
  uuid?: string;
  product_id?: number;
  count: number;
  size?: number;
  ice?: boolean;
  image?: string;
  product_name?: string;
  price: number;
}
