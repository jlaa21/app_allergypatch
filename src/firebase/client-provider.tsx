'use client';
import { initializeFirebase, FirebaseProvider } from '@/firebase';
import { ReactNode } from 'react';

const firebase = initializeFirebase();

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
}
