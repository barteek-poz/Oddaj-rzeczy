const FormBags = () => {
  return (
    <form>
      <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <div id="select">
        <label>Liczba 60l worków:</label>
        <select name="bags" defaultValue="default">
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
    </form>
  );
};

export default FormBags;
