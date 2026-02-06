import { openDB } from "idb";

const dbPromise = openDB("appDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("history")) {
      db.createObjectStore("history", { keyPath: "id" });
    }
  },
});

export async function addHistory(
  action: string,
  email?: string,
  meta?: any
) {
  const db = await dbPromise;

  await db.add("history", {
    id: crypto.randomUUID(),
    action,
    email,
    meta,
    timestamp: Date.now(),
  });
}

export async function getHistory() {
  const db = await dbPromise;
  return db.getAll("history");
}

export async function clearHistory() {
  const db = await dbPromise;
  return db.clear("history");
}
