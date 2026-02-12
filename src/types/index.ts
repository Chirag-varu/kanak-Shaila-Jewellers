export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
  status: "Active" | "Out of Stock";
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface AppUser {
  email: string;
  role: "user" | "admin" | "owner";
  uid: string;
  createdAt?: any;
}

export interface Order {
  id?: string;
  userId: string;
  userEmail: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: "Processing" | "Delivered" | "Cancelled";
  paymentMethod: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface HistoryEntry {
  id?: string;
  action: string;
  email?: string;
  meta?: any;
  timestamp: number;
}
