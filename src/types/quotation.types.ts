export interface Product {
  no?: string;
  id: string;
  name: string;
  quantity: number;
  price: number;
  discount: number;
}

export interface Customer {
  name: string;
  company: string;
  email: string;
  phone: string;
  dateQuote: string;
  rfc: string;
}

export interface QuoteData {
  no: string;
  customerData: Customer;
  productsData: Product[];
}
