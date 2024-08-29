import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
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

  const updateUser = async (data, route) => {
    const docRef = doc(db, "Users", data.uid);
    const docSnap = await getDoc(docRef);

    if (!data?.emailVerified) {
      signOut(auth);
      navigate(`/login?message=` + data.email);
    }

    if (docSnap.exists() && data?.emailVerified) {
      const userData = { ...data, ...docSnap.data() };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      if (route) {
        navigate(`/${docSnap.data().role}-profile`);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // if
      // }
      // }(user) {
      //   // if (!user.emailVerified) {
      //   //   signOut(auth);
      //   //   navigate(`/login?message=` + user.email);
      //   // }
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
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return {
    user,
    signin,
    signup,
    signout,
    updateUser,
  };
}
