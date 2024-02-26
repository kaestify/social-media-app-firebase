import { useAuthContext } from "./useAuthContext";

// firebase imports
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const history = useHistory();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
