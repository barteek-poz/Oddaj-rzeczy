import { useFormContext } from "react-hook-form";

const FormBags = ({ numOfBags, updateForm }) => {
  const { register, formState:{errors} } = useFormContext();
  return (
    <div>
      <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <div id="select">
        <label>Liczba 60l worków:</label>
        <select
          name="bags"
          id="bags"
          defaultValue={numOfBags ? numOfBags : 'default'}
          {...register('bags', {
            onChange: (e) => updateForm({ numOfBags: e.target.value })
          })}>
          <option value="default" disabled>
            - wybierz -
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      {errors.bags && <p>{errors.bags.message}</p>}
    </div>
  );
};

export default FormBags;
