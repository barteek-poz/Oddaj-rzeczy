import styles from "../_styles/FormStep.module.scss"
const FormStep = ({ number, description }) => {
  return (
    <div className={styles.formStep}>
      <span>{number}</span>
      <p>{description}</p>
    </div>
  );
};

export default FormStep;
