const ContactList = (props) => {
    return (
        <div>
            {props.visibleNames.map(contact => {
            return (<li key={contact.id}>
          {contact.name}: {contact.number}
          </li>)})}
        </div>
    )
}

export default ContactList