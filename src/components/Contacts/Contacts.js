import React from "react";
import style from "./Contacts.module.css";
import ContactItem from "./ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/selectors";

function Contacts() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <section className={style.contacts}>
      <ul className={style.contactsList}>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
