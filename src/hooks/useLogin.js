import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const history = useHistory();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
        history.push("/home");
      })

      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
};
