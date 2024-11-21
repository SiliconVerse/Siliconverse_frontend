import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './auth/firebase';

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
function useAuthProvider() {
  // const userLocalData = JSON.parse(localStorage.getItem('user-siliconverse'));
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const navigate = useNavigate();

  const updateUser = async (data, route) => {
    if (!data) {
      return navigate('/login');
    }
    const docRef = doc(db, 'Users', data.uid);
    const docSnap = await getDoc(docRef);

    if (!data?.emailVerified) {
      signOut(auth);
      navigate(`/login?message=` + data.email);
    }

    if (docSnap.exists() && data?.emailVerified) {
      const userData = {
        emailVerified: data.emailVerified,
        uid: data.uid,
        ...docSnap.data(),
      };
      // localStorage.setItem('user-siliconverse', JSON.stringify(userData));
      setUser(userData);
      setIsAuthLoading(false);

      if (route) {
        navigate(`/${docSnap.data().role}-profile`);
      }
    }

    if (
      !docSnap.exists() &&
      data?.emailVerified &&
      data.providerData[0].providerId === 'google.com'
    ) {
      await setDoc(doc(db, 'Users', data.uid), {
        email: data.email,
        firstName: data.displayName,
      });
      const userData = {
        email: data.email,
        firstName: data.displayName,
        uid: data.uid,
        emailVerified: data.emailVerified,
      };
      // localStorage.setItem('user-siliconverse', JSON.stringify(userData));
      setUser(userData);
      setIsAuthLoading(false);
      navigate('/complete-signup', { replace: true });
    }
  };

  const signin = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = async () => {
    await signOut(auth);
    // localStorage.removeItem('user-siliconverse');
    setUser(null);
    navigate('/login');
  };

  const updateUserProfile = async (uid, newDetails) => {
    const userRef = doc(db, 'Users', uid);

    await updateDoc(userRef, newDetails);

    setUser((prev) => ({ ...prev, ...newDetails }));
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (authUser) => {
      if (authUser && !user) {
        await updateUser(authUser);
      }

      if (!authUser) {
        setUser(null);
        setIsAuthLoading(false);
      }
    });

    return () => unsub();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    updateUser,
    isAuthLoading,
    updateUserProfile,
  };
}
