export interface Properties{
    id:number;
    name:string;
    price:number;
    quantity: number;
    image?:string;
}
export interface serverResponse  {
    count: number;
    products: Properties[]
  };