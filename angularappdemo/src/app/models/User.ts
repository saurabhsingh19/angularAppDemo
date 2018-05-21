import {Address} from './Address'
export interface User{
    firstName: string,
    lastName: string,
    age: number
    address?:Address
    image?:string
    
}