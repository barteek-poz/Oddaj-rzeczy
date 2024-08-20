import { useFormContext } from "react-hook-form";
import styles from "../_styles/FormAddress.module.scss";
import { FormAddressInput } from "./FormAddressInput";
const FormAddress = ({
  street,
  city,
  postal,
  phone,
  date,
  time,
  info,
  updateForm,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
console.log(street);
console.log(errors['city']);

  return (
    <div>
      <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
      <div className={styles.formAddressBox}>
        <div className={styles.form}>
          <span>Adres odbioru:</span>
          <FormAddressInput label="Ulica" name="street" inputType='text' inputValue={street} updateForm={updateForm}/>
          <FormAddressInput label="Miasto" name="city" inputType='text' inputValue={city} updateForm={updateForm}/>
          <FormAddressInput label="Kod pocztowy" name="postal" inputType='number' inputValue={postal} updateForm={updateForm}/>
          <FormAddressInput label="Numer telefonu" name="phone" inputType='number' inputValue={phone} updateForm={updateForm}/>
        </div>
        <div className={styles.form}>
          <span>Termin odbioru:</span>
          <FormAddressInput label="Data" name="date" inputType='date' inputValue={date} updateForm={updateForm}/>
          <FormAddressInput label="Godzina" name="time" inputType='time' inputValue={time} updateForm={updateForm}/>
          <div className={styles.inputContainer}>
            <label className={styles.textareaLabel}>Uwagi dla kuriera</label>
            <textarea
              name="more-info"
              value={info}
              {...register('more-info', {
                onChange: (e) => {
                  updateForm({info: e.target.value });
                },
              })}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddress;
