import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase";
import type { HistoryEntry } from "../types";

const COLLECTION = "history";

export async function addHistory(
  action: string,
  email?: string,
  meta?: any
): Promise<void> {
  await addDoc(collection(db, COLLECTION), {
    action,
    email: email || null,
    meta: meta || null,
    timestamp: Date.now(),
  });
}

export async function getHistory(): Promise<HistoryEntry[]> {
  const q = query(collection(db, COLLECTION), orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  })) as HistoryEntry[];
}

export async function clearHistory(): Promise<void> {
  const snapshot = await getDocs(collection(db, COLLECTION));
  const batch = writeBatch(db);
  snapshot.docs.forEach((d) => batch.delete(d.ref));
  await batch.commit();
}
