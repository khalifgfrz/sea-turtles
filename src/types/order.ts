export interface IOrder {
  id: string;
  uuid: string;
  full_name: string;
  address?: string;
  phone?: string;
  payment_method: string;
  delivery_method: string;
  status: string;
  grand_total: string;
  product_name: string;
  size: string;
  qty: number;
  products: {
    image: string;
    product_name: string;
    price: number;
    size: string;
    qty: number;
  }[];
}
