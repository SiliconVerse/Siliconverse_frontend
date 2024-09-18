import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useState } from 'react';
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
  const userLocalData = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(userLocalData);
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
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      if (route) {
        navigate(`/${docSnap.data().role}-profile`);
      }
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
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return {
    user,
    signin,
    signup,
    signout,
    updateUser,
  };
}
