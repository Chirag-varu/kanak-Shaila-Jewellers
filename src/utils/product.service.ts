import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import type { Product } from "../types";

const COLLECTION = "products";

export async function getProducts(): Promise<Product[]> {
  const q = query(collection(db, COLLECTION), orderBy("name"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
}

export async function getProductById(id: string): Promise<Product | null> {
  const docRef = doc(db, COLLECTION, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists()
    ? ({ id: docSnap.id, ...docSnap.data() } as Product)
    : null;
}

export async function addProduct(
  product: Omit<Product, "id">
): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), product);
  return docRef.id;
}

export async function updateProduct(
  id: string,
  data: Partial<Omit<Product, "id">>
): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function deleteAllProducts(): Promise<void> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  const deletes = snapshot.docs.map((d) => deleteDoc(d.ref));
  await Promise.all(deletes);
}
