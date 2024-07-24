import Form from "@/_components/_form/Form";
import FormHeroSection from "@/_components/_form/FormHeroSection";
import { getUsersData } from "../../../lib/firestore-actions";
import ContactSection from "@/_components/_homepage/ContactSection";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import SessionProvider from "../SessionProvider";
import { redirect } from "next/navigation";

const FormPage = async () => {
  const usersData = await getUsersData();
  const session = await getServerSession(authOptions);
  
  return (
    <SessionProvider session={session}>
      {session ? (
        <>
          <FormHeroSection />
          <Form usersData={usersData}/>
          <ContactSection />
        </>
      ) : (
        redirect("/login")
      )}
    </SessionProvider>
  );
};

export default FormPage;
