import { useEffect, useState } from "react";

const useFormValidate = (emailValue, passwordValue, password2Value) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    const loginValidation = () => {
      const emailRegex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
      if (!password2Value) {
        if (emailRegex.test(emailValue) && passwordValue.trim().length >= 6) {
          setFormIsValid(true);
          return
        } else {
          setFormIsValid(false);
          setFormError(true);
          return;
        }
      } else {
        if (
          (emailRegex.test(emailValue) && passwordValue.trim().length >= 6) ||
          (emailRegex.test(emailValue) &&
            passwordValue.trim().length >= 6 &&
            password2Value === passwordValue)
        ) {
          setFormIsValid(true);
        } else {
          setFormIsValid(false);
          setFormError(true);
          return;
        }
      }
    };
    loginValidation();
  }, [emailValue, passwordValue]);

  return { formIsValid, formError };
};

export default useFormValidate;
