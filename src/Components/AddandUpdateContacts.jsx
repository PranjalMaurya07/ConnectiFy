import React from "react";
import Modal from "./Modal";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddandUpdateContacts = ({ isopen, Onclose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact added successfully");
      Onclose();
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact updated successfully");
      Onclose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isopen={isopen} Onclose={Onclose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form>
            <FormContainer className="form">
              <label htmlFor="name">Name</label>
              <Field name="name" className="input_container" />
              <div className="errormessage">
                <ErrorMessage name="name" />
              </div>
            </FormContainer>
            <FormContainer className="form">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="input_container" />
              <div className="errormessage">
                <ErrorMessage name="email" />
              </div>
            </FormContainer>
            <Button type="submit" className="AddContact">
              {isUpdate ? "Update" : "Add"} Contacts
            </Button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandUpdateContacts;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  .input_container {
    height: 30px;
    border: 1px solid black;
    padding-left: 5px;
  }

  .errormessage{
    color: red;
    font-size: 12px;
  }

`;
const Button = styled.button`
  position: absolute;
  left: 226px;
  width: 120px;
  margin-top: 10px;
  border: none;
  border-radius: 2px;
  background-color: #f6820c;
  color: white;
  padding: 3px;
  cursor: pointer;
`;
