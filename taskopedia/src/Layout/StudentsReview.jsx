import React from "react"

class StudentsReview extends React.Component{

    render(){
    return(
        <div className="p-2">
        <i class="bi bi-hand-thumbs-up-fill text-success p-1" 
        style={{cursor:'pointer'}}>
        </i> &nbsp;
        <i class="bi bi-hand-thumbs-down-fill text-danger p-1" style={{cursor:'pointer'}}></i>
        </div>
    )
    }

}



// const StudentsReview =() => {

//     return(
//         <div className="p-2">
//         <i class="bi bi-hand-thumbs-up-fill text-success p-1" 
//         style={{cursor:'pointer'}}>
//         </i> &nbsp;
//         <i class="bi bi-hand-thumbs-down-fill text-danger p-1" style={{cursor:'pointer'}}></i>
//         </div>
//     )

// }


export default StudentsReview;