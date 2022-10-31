import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Hello World!</h1>

class Course extends React.Component{

    //Copnstructor for the course
    constructor(name, code, instructor, notes){
        this.courseName = name;
        this.courseCode = code;
        this.courseInstructor= instructor;
        this.courseExtra - notes;
    }
    
}


//===================================================================================================================================================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CourseList />);