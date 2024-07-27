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
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const validationSchema = [
  z.object({itemType: z.string().min(1),}).required(),
  z.object({bags: z.string().min(1),}).required().refine((data)=> data.bags !== 'default' , {
        message: 'Wybierz rozmiar worka', 
        path: ['bags']
    }),
z.object({
    location: z.string().min(1),
    targets: z.string().array().nonempty()
}).required().refine((data)=> data.location !== 'default' , {
    message: 'Wybierz lokalizację', 
    path: ['location']
})
];

const Form = ({ usersData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const session = useSession();
  const methods = useForm({
    resolver: zodResolver(validationSchema[currentStepIndex]),
  });
  const { handleSubmit, reset, trigger } = methods;

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
    if(currentStepIndex < 3) {
      const isCurrFormValid = await trigger();
      if (isCurrFormValid) {
          console.log(isCurrFormValid);
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
