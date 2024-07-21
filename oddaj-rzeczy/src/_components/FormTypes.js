const FormTypes = () => {
  return (
    <form>
      <h3>Zaznacz co chcesz oddać:</h3>
      <div id="radio">
        <input type="radio" name="item-type" value="reusable-clothes" />
        <label htmlFor="reusable-clothes">
          ubrania, które nadają się do ponownego użycia
        </label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type" value="garbage-clothes" />
        <label htmlFor="garbage-clothes">ubrania do wyrzucenia</label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type" value="toys"/>
        <label htmlFor="toys">zabawki</label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type"  value="books"/>
        <label htmlFor="books">książki</label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type" value="others" />
        <label htmlFor="others">inne</label>
      </div>
    </form>
  );
};

export default FormTypes;
