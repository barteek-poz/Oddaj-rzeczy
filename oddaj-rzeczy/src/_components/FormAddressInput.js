import styles from "../_styles/FormAddress.module.scss";
import { useFormContext } from "react-hook-form";
export const FormAddressInput = ({label, name, inputType, inputValue, updateForm}) => {
  const {register,formState: { errors }} = useFormContext();
console.log(inputValue);

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputBox}>
        <label>{label}</label>
        <input
          type={inputType}
          name={name}
          value={inputValue}
          {...register(`${name}`, {
            onChange: (e) => {
              updateForm({ [`${name}`]: e.target.value });
            },
          })}
        />
      </div>
      {errors[`${name}`] && (
        <div>
          <p className={styles.error}>{errors[`${name}`].message}</p>
        </div>
      )}
    </div>
  );
};
