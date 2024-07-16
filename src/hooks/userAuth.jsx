// src/hooks/useAuth.js
import { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from './auth/firebase';
import { getDoc, doc } from 'firebase/firestore';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Create a context for the auth
const AuthContext = createContext();

// Provide the auth context to your app
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Hook for using the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Custom hook to manage Firebase Authentication
function useAuthProvider() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const updateUser = async (uid) => {
    const docRef = doc(db, 'Users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser((prev) => ({ ...prev, ...docSnap.data() }));
      navigate(`/${docSnap.data().role}-profile`);
    }
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    signOut(auth);
    navigate('/');
  };

  return {
    user,
    updateUser,
    signin,
    signup,
    signout,
  };
}
