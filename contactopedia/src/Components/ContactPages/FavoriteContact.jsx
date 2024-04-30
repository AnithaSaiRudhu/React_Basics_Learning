import Contact from "./Contact";

const FavouriteContact = (props) => {    
  return (
    <div>
        {
            props.contacts.map((contact,index) => (
                <Contact contact = {contact} key = {index} favoriteClick = {props.favoriteClick} deleteContact = {props.deleteContact}
                updateContact={props.updateContact}></Contact>
            ))
        }       
    </div>
   
  );
};

export default FavouriteContact;