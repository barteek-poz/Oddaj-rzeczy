import { useFormContext } from "react-hook-form";
import styles from "../_styles/FormLocation.module.scss";


const FormLocation = ({ location, targets, organization, updateForm }) => {
  const {register, formState: { errors }} = useFormContext();

console.log(targets);
  const updateTargetsArray = (targetValue) => {
    const filteredTarget = targets.filter((target) => target === targetValue);
    if (filteredTarget.length > 0) {
      const updatedTargets = targets.filter((target) => target !== targetValue);

      updateForm({ targets: [...updatedTargets] });
    } else updateForm({ targets: [...targets, targetValue] });
  };

  return (
    <div className={styles.formLocation}>
      <div id="select">
        <h3>Lokalizacja:</h3>
        <div className={styles.formSelect}>
          <select
            name="location"
            defaultValue={location ? location : "default"}
            {...register("location", {
              onChange: (e) => updateForm({ location: e.target.value }),
            })}>
            <option value="default" disabled>
              - wybierz -
            </option>
            <option value="Poznań">Poznań</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Katowice">Katowice</option>
            <option value="Kraków">Kraków</option>
            <option value="Wrocław">Wroclaw</option>
          </select>
          {errors.location && <p className={styles.error}>{errors.location.message}</p>}
        </div>

        <p>Komu chcesz pomóc?</p>
        <div className={styles.checkboxes}>
          <div id="checkbox">
            <label>
              <input
                name="targets"
                type="checkbox"
                checked={
                  targets.filter((target) => target === "dzieciom").length > 0
                }
                value="dzieciom"
                {...register("targets", {
                  onChange: (e) => updateTargetsArray(e.target.value),
                })}
              />
              <span>dzieciom</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                name="targets"
                type="checkbox"
                value="samotnym matkom"
                checked={
                  targets.filter((target) => target === "samotnym matkom")
                    .length > 0
                }
                {...register("targets", {
                  onChange: (e) => updateTargetsArray(e.target.value),
                })}
              />
              <span>samotnym matkom</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                name="targets"
                type="checkbox"
                value="bezdomnym"
                checked={
                  targets.filter((target) => target === "bezdomnym").length > 0
                }
                {...register("targets", {
                  onChange: (e) => updateTargetsArray(e.target.value),
                })}
              />
              <span>bezdomnym</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                name="targets"
                type="checkbox"
                value="niepełnosprawnym"
                checked={
                  targets.filter((target) => target === "niepełnosprawnym")
                    .length > 0
                }
                {...register("targets", {
                  onChange: (e) => updateTargetsArray(e.target.value),
                })}
              />
              <span>niepełnosprawnym</span>
            </label>
          </div>
          <div id="checkbox">
            <label>
              <input
                name="targets"
                type="checkbox"
                value="osobom starszym"
                checked={
                  targets.filter((target) => target === "osobom starszym")
                    .length > 0
                }
                {...register("targets", {
                  onChange: (e) => updateTargetsArray(e.target.value),
                })}
              />
              <span>osobom starszym</span>
            </label>
          </div>
        </div>
        <div>
          <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
          <input
            type="text"
            name="optional-organization"
            value={organization}
            onChange={(e) => {
              updateForm({ organization: e.target.value });
            }}
            />
            {errors.targets && <p className={styles.error}>Wybierz przynajmniej jedną grupę, której chcesz podarować rzeczy.</p>}
        </div>
      </div>
    </div>
  );
};

export default FormLocation;


