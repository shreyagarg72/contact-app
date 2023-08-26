import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  // const contacts = [
  //   {
  //     id:"1",
  //     name: "shreya",
  //     email:"sh@0987.com"
  //   },
  //   {
  //     id:"2",
  //     name: "shriya",
  //     email:"sh@87.com"
  //   }

  // ];
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id: uuid() ,...contact}]);
  };

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) =>{
      return contact.id !==id;
    });

    setContacts(newContactList);
  }
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      <ContactList contacts={contacts} getContactId ={ removeContactHandler}></ContactList>
    </div>
  );
}

export default App;
