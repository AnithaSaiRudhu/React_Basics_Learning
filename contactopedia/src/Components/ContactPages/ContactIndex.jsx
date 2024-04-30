import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavouriteContact from "./FavoriteContact";
import GeneralContacts from "./GeneralContact";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            contactList:[
                {
                    id : 1,
                    name : "Ben Parker",
                    phone : "555-565-6565",
                    email : "ben@dotnetmastery.com",
                    isFavorite: false,
                },

                {
                    id : 2,
                    name : "Kathy Parker",
                    phone : "555-566-6599",
                    email : "kathy@dotnetmastery.com",
                    isFavorite: true,
                },

                {
                    id : 3,
                    name: "Paul Show",
                    phone : "999-222-1111",
                    email : "paul@dotnetmastery.com",
                    isFavorite: true,
                },
            ],
            selectedContact: undefined,
            isUpdating: false,
        }

    }

    handleAddContact = (newContact) =>{
            if(newContact.name == ""){
                return { status : "failure" , msg : "Please Enter a Valid name"};            
            }else if(newContact.email == ""){
                return { status : "failure" , msg : "Please Enter a Valid Email"};           
            }else if(newContact.phone == ""){
                return { status : "failure" , msg : "Please Enter a Valid Phone number"};           
            }
            const duplicate = this.state.contactList.filter((x) => {
                if((x.name == newContact.name) && (x.phone == newContact.phone )){
                    return true;
                }
            });

            if(duplicate.length > 0){
                return { status : "failure" , msg : "Duplicate Record"};     
            }
            else{
            const newfinalContact = {...newContact, 
                id: this.state.contactList[this.state.contactList.length-1].id+1,
                isFavorite : false
            }
           
            this.setState((p) =>{
                return {
                    contactList : p.contactList.concat([newfinalContact])
                }
            });

            return { status : "success" , msg : "Records added successfully"};
        }
    }

    handleToggleFvorite = (contact) =>{
        this.setState((p) => {
            return {
                contactList : p.contactList.map((o) => {
                    if(o.id == contact.id){
                        return {
                            ...o,
                            isFavorite : !o.isFavorite
                        }
                    }
                    else{
                        return o;
                    }
                })
            }

        })
    }

    handleDeleteContact = (delContact) => {
        
        console.log(delContact)
        this.setState((p) => {
            return {
                contactList : p.contactList.filter((obj) => {
                    return obj.id != delContact.id  ;           
                })
            }

        })
    }

    handleAddRandomcontact = (newContact) => {    
        const newfinalContact = {...newContact, 
            id: this.state.contactList[this.state.contactList.length-1].id+1,
            isFavorite : false
        }

        this.setState((p) =>{
            return {
                contactList : p.contactList.concat([newfinalContact])
            }
        });
    }

    //handle Remove button click
    handleRemoveAllContact = () => {      
        this.setState((p) =>{
            return {
                contactList : [],
            }
        });
    }


    handleUpdateClick = (contact) => {
        console.log(contact);
        this.setState((p) => {
            return {
                selectedContact:contact,
                isUpdating:true
            }
        });

    }


    render(){
        return(
                <div>
                    <Header/>
                    <div className="container" style={{minHeight:"85 px"}}>
                        <div className="row py-3">
                            <div className="col-4 offset-2">
                                <AddRandomContact                                
                                handleAddRnContact = {this.handleAddRandomcontact}/>
                            </div>
                            <div className="col-4">
                                <RemoveAllContact handleRemoveAllContact = {this.handleRemoveAllContact}/>
                            </div>
                            <div className="row py-2">
                                <AddContact 
                                selectedContact = {this.state.selectedContact} 
                                isUpdating = {this.state.isUpdating}
                                handleAddContact = {this.handleAddContact} />
                            </div>
                            <div className="row py-2">
                                <FavouriteContact contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite == true )}
                                     favoriteClick = {this.handleToggleFvorite}
                                     deleteContact = {this.handleDeleteContact}
                                     updateContact = {this.handleUpdateClick}
                                     />
                            </div>
                            <div className="row py-2">
                                <GeneralContacts contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite == false)}
                                    favoriteClick = {this.handleToggleFvorite}
                                    deleteContact = {this.handleDeleteContact}
                                    updateContact = {this.handleUpdateClick}
                                    />
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </div>
        )
    }
}

export default ContactIndex;