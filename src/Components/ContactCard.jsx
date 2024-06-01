import React from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import styled from "styled-components";
import useDisclosure from "../CustomHooks/useDisclosure";
import AddandUpdateContacts from "./AddandUpdateContacts";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { Onopen, Onclose, isopen } = useDisclosure();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container key={contact.id}>
        <div className="iconandcontact">
          <HiOutlineUserCircle className="user_icon" />
          <div className="contact_details">
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
          </div>
        </div>
        <div className="icons">
          <RiEditCircleLine onClick={Onopen} className="edit_icon" />
          <IoMdTrash
            onClick={() => {
              deleteContact(contact.id);
            }}
            className="delete_icon"
          />
        </div>
      </Container>
      <AddandUpdateContacts
        isUpdate
        contact={contact}
        isopen={isopen}
        Onclose={Onclose}
      />
    </div>
  );
};

export default ContactCard;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #ffeaae;
  margin: 10px;
  border-radius: 10px;

  .iconandcontact{
    display: flex;
    gap: 15px;
  }

  .user_icon {
    width: 48px;
    height: 48px;
    color: #f6820c;
  }

  .edit_icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  .delete_icon {
    width: 32px;
    height: 32px;
    color: #f6820c;
    cursor: pointer;
  }

  .contact_details {
    h2 {
      font-size: 16px;
    }
    p {
      font-weight: 600;
      font-size: 14px;
    }
  }
`;
