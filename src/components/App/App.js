import "./App.css";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";

function App() {
  return (
    <section className="phonebook">
      <h1>Phonebook</h1>
      <Form />

      <h2 className="contactsHead">Contacts </h2>
      <Filter />
      <Contacts />
    </section>
  );
}

export default App;
