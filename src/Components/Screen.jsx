import React from "react";
import Navbar from "./Navbar";
import ContactCard from "./ContactCard";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { useState , useEffect} from "react";
import AddandUpdateContacts from "./AddandUpdateContacts";
import useDisclosure from "../CustomHooks/useDisclosure";
import { db } from "../config/firebase";
import { collection,onSnapshot } from "firebase/firestore";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoContact from "./NoContact";

const Screen = () => {

  const {Onopen,Onclose,isopen} = useDisclosure();

  const [contacts, setContacts] = useState([]); 
  useEffect(() => { 
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts"); 
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef,(snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return { 
              id: doc.id,
              ...doc.data(),
            };
          })
          setContacts(contactsList);
          return contactsList;
        })
        

      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <Container> 
      <Navbar/>
      <Searchbar Onopen = {Onopen} filterContacts = {filterContacts}/>   
      <div>
        {(
          contacts.length <= 0 ? <NoContact/> : contacts.map((contact) => 
            <ContactCard key={contact.id} contact = {contact} />
          )
        )}
      </div>
      <AddandUpdateContacts isopen={isopen} Onclose={Onclose}/>
      <ToastContainer position="bottom-center"/>
    </Container>
  );
};

export default Screen;

const Container = styled.div`
  max-width: 370px;
  margin: auto;
`;
