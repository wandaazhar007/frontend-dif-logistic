// lib/firestore.ts
import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

if (!getApps().length) initializeApp(firebaseConfig);
export const db = getFirestore();

// helpers
export const contactsCollection = () => collection(db, "contacts");
export const servicesCollection = () => collection(db, "services");
export const clientsCollection = () => collection(db, "clients");

export async function addContact(payload: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const docRef = await addDoc(contactsCollection(), {
    ...payload,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
}