import React from "react";
import { getRandomUser } from "./utility/API";


class CyclopediaClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            instructor:undefined,
            studentList:[{

            }],
            studentCount:0,
            hideInstructor:false,
            inputfield: "",
            inputFeedBack: ""
        }
    }

     componentDidMount = async () =>{
        console.log("Component Did Mount");
        const response = await getRandomUser();
        console.log(response);
        this.setState((p) => {
                return{
                    instructor :{
                        name : response.data.first_name + " " + response.data.last_name,
                        email: response.data.email,
                        phone:response.data.phone_number
                    },
                };
            }      
         );
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        console.log("Render Component");
        
            return(
                <div className="p-3">
                <div>
                    {this.state.instructor && (
                    <div className="p-3 text-white"> 
                        <span className="h4 text-success">Instructor</span>
                        <i className="bi bi-toggle-off btn btn-success btn-sm"></i>
                        <br/>
                        Name: {this.state.instructor.name} <br/>
                        Email: {this.state.instructor.email} <br/>
                        Phone: {this.state.instructor.phone} <br/>               
                    </div>
                )}</div>
                <div className="p-3">
                    <span className="h4 text-success">Feedback</span><br/>
                    <input 
                    type="text" 
                    placeholder="Name..."
                    onChange={(e) => {this.setState({inputfield : e.target.value})} }
                    >
                        </input> <br/>
                    <textarea placeholder="Feedback...."></textarea>
                </div>

                </div>
            )
        }       
    

}

export default CyclopediaClass;