import {addDoc, arrayUnion, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../src/app/firebase";
 
export const getUsersData = async () => {
    const usersData = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((user) => {
      usersData.push({id:user.id, ...user.data()});
    });
    return usersData
}

export const addNewUserForm = async(userEmail,formData) => {
  const formRef = await addDoc(collection(db, "users"), {
    email: userEmail,
    charityCollections:[formData]
    
  });
}

export const addExistingUserForm = async(userId, formData) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
      charityCollections: arrayUnion(formData)
  });
}