import { useFormContext } from "react-hook-form";

const FormTypes = ({ type, updateForm }) => {
  const { register, formState:{errors} } = useFormContext();
  
  return (
    <div>
      <h3>Zaznacz co chcesz oddać:</h3>
      <div id="radio">
        <input
          type="radio"
          name="itemType"
          value="ubrania, które nadają się do ponownego użycia"
          checked={type === "ubrania, które nadają się do ponownego użycia"}
          {...register('itemType', {
            onChange:(e) => updateForm({ type: e.target.value })
          })}
        />
        <label htmlFor="ubrania, które nadają się do ponownego użycia">
          ubrania, które nadają się do ponownego użycia
        </label>
      </div>
      <div id="radio">
        <input
          type="radio"
          name="itemType"
          value="ubrania do wyrzucenia"
          checked={type === "ubrania do wyrzucenia"}
          {...register('itemType', {
            onChange:(e) => updateForm({ type: e.target.value })
          })}
        />
        <label htmlFor="ubrania do wyrzucenia">ubrania do wyrzucenia</label>
      </div>
      <div id="radio">
        <input
          type="radio"
          name="itemType"
          value="zabawki"
          checked={type === "zabawki"}
          {...register('itemType', {
            onChange:(e) => updateForm({ type: e.target.value })
          })}
        />
        <label htmlFor="zabawki">zabawki</label>
      </div>
      <div id="radio">
        <input
          type="radio"
          name="itemType"
          value="książki"
          checked={type === "książki"}
          {...register('itemType', {
            onChange:(e) => updateForm({ type: e.target.value })
          })}
        />
        <label htmlFor="książki">książki</label>
      </div>
      <div id="radio">
        <input
          type="radio"
          name="itemType"
          value="inne"
          checked={type === "inne"}
          {...register('itemType', {
            onChange:(e) => updateForm({ type: e.target.value })
          })}
        />
        <label htmlFor="inne">inne</label>
      </div>
      {errors.itemType && <p>Wybierz jedną z opcji</p>}
    </div>
  );
};

export default FormTypes;
