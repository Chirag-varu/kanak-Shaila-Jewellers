import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import type { AppUser } from "../types";

export async function createUser(
  email: string,
  password: string,
  role: "user" | "admin" | "owner" = "user"
): Promise<AppUser> {
  const credential = await createUserWithEmailAndPassword(auth, email, password);

  const userData: AppUser = {
    uid: credential.user.uid,
    email: credential.user.email!,
    role,
    createdAt: serverTimestamp(),
  };

  await setDoc(doc(db, "users", credential.user.uid), userData);

  return userData;
}

export async function loginUser(
  email: string,
  password: string
): Promise<AppUser> {
  const credential = await signInWithEmailAndPassword(auth, email, password);

  const userDoc = await getDoc(doc(db, "users", credential.user.uid));
  if (!userDoc.exists()) {
    const userData: AppUser = {
      uid: credential.user.uid,
      email: credential.user.email!,
      role: "user",
      createdAt: serverTimestamp(),
    };
    await setDoc(doc(db, "users", credential.user.uid), userData);
    return userData;
  }

  return userDoc.data() as AppUser;
}

export async function logoutUser(): Promise<void> {
  await signOut(auth);
}

export async function getUserProfile(uid: string): Promise<AppUser | null> {
  const userDoc = await getDoc(doc(db, "users", uid));
  return userDoc.exists() ? (userDoc.data() as AppUser) : null;
}
