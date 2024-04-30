import React from "react";



class Students  extends React.Component{
    render(){
    return(
      <div className='container p-4'>
        <div className='row'>
            Students Enrolled
        </div>
        <div className='row border'>
           <div className='col 2'> <img src={this.props.headshot} className='w-5 py=-2'></img></div>
           <div className='col 8'>{this.props.name} <br/> Coding Experience : {this.props.experience}
           </div>
           <div className="col-2">
              {this.props.children}
           </div>
        </div>
      </div>
    )
  }
  }


  // const Students = (props) => {
    
  //   return(
  //     <div className='container p-4'>
  //       <div className='row'>
  //           Students Enrolled
  //       </div>
  //       <div className='row border'>
  //          <div className='col 2'> <img src={props.headshot} className='w-5 py=-2'></img></div>
  //          <div className='col 8'>{props.name} <br/> Coding Experience : {props.experience}
  //          </div>
  //          <div className="col-2">
  //             {props.children}
  //          </div>
  //       </div>
  //     </div>
  //   )
  // }
 
 
  
  export default Students;