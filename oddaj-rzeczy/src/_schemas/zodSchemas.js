import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string()
      .email({
        message: "Zły adres email. Upewnij się, że wpisałeś go poprawnie",
      })
      .min(1),
    password: z.string().min(6, {
      message: "Złe hasło. Upewnij się, że wpisujesz je poprawnie.",
    }),
  })
  .required();

  
export const registerSchema = z
  .object({
    email: z
      .string()
      .email({
        message: "Zły adres email. Upewnij się, że wpisałeś go poprawnie",
      })
      .min(1),
    password: z.string().min(6, {
      message: "Hasło musi mieć minimum 6 znaków",
    }),
    password2: z.string().min(6, {
      message: "Hasło musi mieć minimum 6 znaków",
    }),
  })
  .required()
  .refine((data) => data.password === data.password2, {
    message: "Hasła muszą być takie same",
    path: ["password2"],
  });

  export const formsValidationSchema = [
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
  }), 
  z.object({
    street: z.string().regex(/^[a-zA-Z]+$/, "Nazwa ulicy może zawierać tylko litery").min(1),
    city: z.string().regex(/^[a-zA-Z]+$/, "Nazwa miasta może zawierać tylko litery").min(1),
    postal: z.string().regex(/^\d{5}$/, "Kod pocztowy musi składać się z 5 cyfr"),
    phone: z.string().regex(/^\d{9}$/, "Ciąg musi składać się z 9 cyfr"),
    date: z.string().min(1, 'Wybierz datę'),
    time: z.string().min(1, 'Wybierz godzinę')
  })
  ];