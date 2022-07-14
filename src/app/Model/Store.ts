import { City } from "./City";
import { Products } from "./Products";

export class Store{
    id: number;
    name: String;
    city: City;
    listProducts: Products[];
}