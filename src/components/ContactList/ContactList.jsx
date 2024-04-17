import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const search = useSelector((state) => state.filter.filters.name);

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()) || contact.number.includes(search));

  return <ul>{contacts && filterContacts.map((contact) => <Contact key={contact.id} contact={contact} />)}</ul>;
};

export default ContactList;
