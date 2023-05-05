import { auth } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
    <h3>ChatMate</h3>
      <p className="pAuth"> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle} className="btnGoogle"> Sign In With Google </button>
    </div>
  );
};
