import { useMultistepForm } from "@/_hooks/useMultistepForm";

const FormTypes = ({type, updateForm}) => {

  return (
    <div>
      <h3>Zaznacz co chcesz oddać:</h3>
      <div id="radio">
        <input type="radio" name="item-type" value="ubrania, które nadają się do ponownego użycia" checked={type === "ubrania, które nadają się do ponownego użycia"} onChange={(e)=>updateForm({type: e.target.value})}/>
        <label htmlFor="ubrania, które nadają się do ponownego użycia">
          ubrania, które nadają się do ponownego użycia
        </label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type" value="ubrania do wyrzucenia" checked={type === "ubrania do wyrzucenia"} onChange={(e)=>updateForm({type: e.target.value})}/>
        <label htmlFor="ubrania do wyrzucenia">ubrania do wyrzucenia</label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type" value="zabawki" checked={type === "zabawki"} onChange={(e)=>updateForm({type: e.target.value})}/>
        <label htmlFor="zabawki">zabawki</label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type"  value="książki" checked={type === "książki"} onChange={(e)=>updateForm({type: e.target.value})}/>
        <label htmlFor="książki">książki</label>
      </div>
      <div  id="radio">
        <input type="radio" name="item-type" value="inne" checked={type === "inne"} onChange={(e)=>updateForm({type: e.target.value})}/>
        <label htmlFor="inne">inne</label>
      </div>
    </div>
  );
};

export default FormTypes;
