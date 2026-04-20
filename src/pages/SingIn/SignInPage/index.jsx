import SignInForm from "../SingInForm";
import styles from "./styles.module.css";
function SignInPage() {
  return (
    <div className={`${styles.signInContainer} introAnimation container`}>
      <SignInForm></SignInForm>
    </div>
  );
}

export default SignInPage;
