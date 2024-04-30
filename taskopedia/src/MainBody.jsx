import Students from './Layout/Students';
import StudentsReview from './Layout/StudentsReview';


function MainBody(){
    const WhatWeWillLearn = "React JS";
    const totalLecture = "Total Lecture -3"
    return (
      <div>
        <div>
           <p style={{color:'blue'}}> In this Course, we will learn {WhatWeWillLearn} by building Taskopedia!</p>
           <p>{totalLecture}</p>
           <ul>
             <li>Basic Foundation</li>
             <li>Functional and Class Components</li>
           </ul>
           <div>
              Enter Task :{"    "} <input maxLength={5} readOnly={false} placeholder='123'></input>
            </div>         
        </div>
          <div>
          <Students name="Vinoth" experience= {16} headshot = "https://api.lorem.space/image/movie?w=150&h=220"> <StudentsReview></StudentsReview></Students> 
          <Students name="Sai Sivan" experience= {3} headshot = "https://api.lorem.space/image/movie?w=150&h=220"><StudentsReview></StudentsReview></Students>     
          <Students name="Anitha" experience= {12} headshot = "https://api.lorem.space/image/movie?w=150&h=220"> </Students> 
          </div>
        </div>     
          
        
    )
    }

    export default MainBody;