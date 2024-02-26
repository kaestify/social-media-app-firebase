import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useHistory } from "react-router-dom";
// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const history = useHistory();

  const signup = (name, email, password, confirmPassword) => {
    setError(null);

    if (password !== confirmPassword) {
      console.log(password);
      console.log(confirmPassword);
      setError("Passwords do not match ");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          //add display name to user
          updateProfile(auth.currentUser, { displayName: name });
          dispatch({ type: "LOGIN", payload: res.user });
          history.push("/home");
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return { error, signup, setError };
};
