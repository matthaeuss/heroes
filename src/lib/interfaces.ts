interface AccountRepresentative{
    repId: number;
    name: string;
}

export interface Hero {
    id: number;
    name: string;
    description: string;
    email: string;
    orders?: Order[];
    accountRep?: AccountRepresentative;
}

interface ShippingStatus{
    [index: number]: ShippingStatus;
    status: string;
    orderNum: number;
}

export interface Order {
    heroId: number; 
    num: number;
    items: Item[];
    shippingStatus: ShippingStatus
}

export interface Item {
    orderNum: number;
    name: string;
    price: number;
    qty: number;
}

export interface Callback<T> {
    (data: T): void;
}


export interface CallbackError {
    (msg?: string): void;
}

// const x: string[] = ['ala']
// const y: Array<string> = ['ala']
// const z: Array<boolean> = [true]