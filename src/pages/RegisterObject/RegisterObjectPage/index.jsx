//import styles from "./styles.module.css";

import RegisterObjectForm from "../RegisterObjectForm";
import RegisterObjectHeader from "../RegisterObjectHeader";

function RegisterObjectPage() {
  return (
    <main className="container mt-5 mb-4">
      <RegisterObjectHeader />
      <RegisterObjectForm />
    </main>
  );
}

export default RegisterObjectPage;
