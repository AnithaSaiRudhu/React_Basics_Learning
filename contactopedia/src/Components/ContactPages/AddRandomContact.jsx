import { getRandomUser } from "../../Utility/API";

const GetRandomContact = async (props) =>{
    const resposefromAPI =  await getRandomUser();
    console.log(resposefromAPI);
    props.handleAddRnContact({
        name:resposefromAPI.data.first_name + " " + resposefromAPI.data.last_name,
        email:resposefromAPI.data.email,
        phone:resposefromAPI.data.phone_number,
    });
}

const AddRandomContact= (props) => {
    return (
      <div>
          <button className="btn btn-success form-control" onClick={() => GetRandomContact(props)}>
                Add Random Contact
          </button>
      </div>
     
    );
  };
  
  export default AddRandomContact;