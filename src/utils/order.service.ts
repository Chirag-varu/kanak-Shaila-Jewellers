import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import type { Order } from "../types";

const COLLECTION = "orders";

export async function createOrder(order: Omit<Order, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...order,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getOrdersByUser(userId: string): Promise<Order[]> {
  const q = query(
    collection(db, COLLECTION),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
}

export async function getAllOrders(): Promise<Order[]> {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
}

export async function updateOrderStatus(
  orderId: string,
  status: Order["status"]
): Promise<void> {
  await updateDoc(doc(db, COLLECTION, orderId), { status });
}
