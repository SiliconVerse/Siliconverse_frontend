import { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "./auth/firebase";
import { getDoc, doc } from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const updateUser = async (uid, user) => {
    const docRef = doc(db, "Users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = { ...docSnap.data(), ...user };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      navigate(`/${docSnap.data().role}-profile`);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        if (!user.emailVerified) {
          navigate(`/login`);
        } else {
          await updateUser(user.uid, user);
        }
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    signOut(auth);
    navigate("/");
  };

  return {
    user,
    signin,
    signup,
    signout,
  };
}
