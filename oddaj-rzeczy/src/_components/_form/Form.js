"use client";
import { initialFormData } from "@/_constans/constans";
import { formsValidationSchema } from "@/_schemas/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  addExistingUserForm,
  addNewUserForm,
} from "../../../lib/firestore-actions";
import styles from "../../_styles/Form.module.scss";
import FormButton from "../FormButton";
import FormTypes from "../FormTypes";
import FormBags from "../FormBags";
import FormLocation from "../FormLocation";
import FormAddress from "../FormAddress";
import FormSummary from "../FormSummary";
import FormThankYou from "../FormThankYou";

const Form = ({ usersData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const session = useSession();
  const methods = useForm({
    resolver: zodResolver(formsValidationSchema[currentStepIndex]),
  });
  const { trigger } = methods;

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

  const nextStep = async () => {
    if (currentStepIndex <= 3) {
      const isCurrFormValid = await trigger();
      if (isCurrFormValid) {
        setCurrentStepIndex((prevIndex) => prevIndex + 1);
      }
    } else setCurrentStepIndex((prevIndex) => prevIndex + 1);
  };

  const prevStep = () => {
    setCurrentStepIndex((prevIndex) => prevIndex - 1);
  };

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
      {formsArr[currentStepIndex].description ? (
        <div className={styles.formBanner}>
          <span>Ważne!</span> <p>{formsArr[currentStepIndex].description}</p>
        </div>
      ) : null}
      <div className={styles.form}>
        {currentStepIndex >= 4 ? null : (
          <span>Krok {currentStepIndex + 1}/ 4</span>
        )}
        <FormProvider {...methods}>
          <form className={styles.userForm}>
            {formsArr[currentStepIndex].form}
          </form>
        </FormProvider>
        {currentStepIndex === 5 ? null : (
          <div className={styles.formBtns}>
            {currentStepIndex === 0 ? null : (
              <FormButton onBtnClick={prevStep}>Wstecz</FormButton>
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
