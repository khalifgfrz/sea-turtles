export interface IHistory {
  id: string;
  uuid: string;
  created_at: string;
  grand_total: string;
  status: string;
  products: {
    image: string;
    product_name: string;
    price: number;
    size: string;
    qty: number;
  }[];
}
