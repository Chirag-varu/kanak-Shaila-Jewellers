import { openDB } from "idb";

const dbPromise = openDB("authDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { keyPath: "email" });
    }
  },
});

export async function createUser(email: string, password: string) {
  const db = await dbPromise;
  const existing = await db.get("users", email);
  if (existing) throw new Error("User already exists");

  await db.add("users", { email, password });
}

export async function loginUser(email: string, password: string) {
  const db = await dbPromise;
  const user = await db.get("users", email);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  return user;
}
