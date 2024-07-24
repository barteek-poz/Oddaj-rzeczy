"use client";
import { useMultistepForm } from "@/_hooks/useMultistepForm";
import { useState } from "react";
import styles from "../../_styles/Form.module.scss";
import FormAddress from "../FormAddress";
import FormBags from "../FormBags";
import FormButton from "../FormButton";
import FormLocation from "../FormLocation";
import FormSummary from "../FormSummary";
import FormThankYou from "../FormThankYou";
import FormTypes from "../FormTypes";
import { useSession } from "next-auth/react";
import {
  addExistingUserForm,
  addNewUserForm,
} from "../../../lib/firestore-actions";

const initialFormData = {
  type: "",
  numOfBags: "",
  location: "",
  targets: [],
  organization: "",
  steet: "",
  city: "",
  postal: "",
  phone: "",
  date: "",
  time: "",
  info: "",
};

const Form = ({ usersData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [formIsValid, setFormIsValid] = useState(false);
  const session = useSession();

  const updateForm = (updatedData) => {
    setFormData((prevData) => {
      return { ...prevData, ...updatedData };
    });
  };

  const formsArr = [
    {
      description:
        "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
      form: <FormTypes {...formData} updateForm={updateForm} />,
    },
    {
      description:
        "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
      form: <FormBags {...formData} updateForm={updateForm} />,
    },
    {
      description:
        "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
      form: <FormLocation {...formData} updateForm={updateForm} />,
    },
    {
      description: "Podaj adres oraz termin odbioru rzeczy.",
      form: <FormAddress {...formData} updateForm={updateForm} />,
    },
    {
      description: null,
      form: <FormSummary {...formData} updateForm={updateForm} />,
    },
    {
      description: null,
      form: <FormThankYou />,
    },
  ];

  const {
    step,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
  } = useMultistepForm(formsArr);

  const submitFormHandler = () => {
    const existingUser = usersData.find(
      (user) => user.email === session.data?.user?.email
    );
    if (existingUser) {
      addExistingUserForm(existingUser.id, formData);
      nextStep();
    } else {
      addNewUserForm(session.data.user.email, formData);
      nextStep();
    }
  };

  return (
    <section>
      {step.description ? (
        <div className={styles.formBanner}>
          <span>Ważne!</span> <p>{step.description}</p>
        </div>
      ) : null}
      <div className={styles.form}>
        {currentStepIndex >= 4 ? null : (
          <span>Krok {currentStepIndex + 1}/ 4</span>
        )}
        <form className={styles.userForm}>{step.form}</form>
        {isLastStep ? null : (
          <div className={styles.formBtns}>
            {isFirstStep ? null : (
              <FormButton onBtnClick={previousStep}>Wstecz</FormButton>
            )}
            {currentStepIndex <= 3 ? (
              <FormButton onBtnClick={nextStep}>Dalej</FormButton>
            ) : (
              <FormButton onBtnClick={submitFormHandler}>Potwierdź</FormButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Form;
