import styles from "../../_styles/Form.module.scss";
import Button from "../Button";
import FormBags from "../FormBags";
import FormButton from "../FormButton";
import FormLocation from "../FormLocation";
import FormTypes from "../FormTypes";
const Form = () => {
  return (
    <section>
      <div>Banner</div>
      <div className={styles.form}>
        <span>Steps 1/4</span>
        <div className={styles.userForm}>
          <FormLocation />
        </div>
        <div className={styles.formBtns}>
          <FormButton>Wstecz</FormButton>
          <FormButton>Dalej</FormButton>
        </div>
      </div>
    </section>
  );
};

export default Form;
