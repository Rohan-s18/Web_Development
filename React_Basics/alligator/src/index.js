import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Hello World!</h1>

class Course extends React.Component{

    //Render: Creating a table row for the course
    render(){
        return (
        <tr>
            <td className='Schedule'>{this.props.courseCode}</td>
            <td className='Schedule'>{this.props.courseName}</td>
            <td className='Schedule'>{this.props.courseInstructor}</td>
            <td className='Schedule'>{this.props.courseExtra}</td>
        </tr>
        );
    }

}

class Schedule extends React.Component{

    //Render course helper method
    renderCourse(name, code, instructor, notes){
        return (
        <Course
            courseName = {name}
            courseCode = {code}
            courseInstructor = {instructor}
            courseExtra = {notes}
        />
        );
    }

    //Render: Creating a table for all of the courses
    render(){
        return (
            <html>
            <body>
            <h1>Depth Requirements</h1>
            <table className='Schedule'>
                {this.renderCourse("Intro to Java","CSDS 132","Harold Connamacher","No Prereq")}
                {this.renderCourse("Data Structures","CSDS 233","Erman Ayday","CSDS 132")}
                {this.renderCourse("Logic Design","CSDS 281","Evren Gurkan Cavasoglu","CSDS 132 or ENGR 131")}
                {this.renderCourse("Discrete Mathematics","CSDS 302","Ulises Fidalgo","MATH 122")}
                {this.renderCourse("Algorithms","CSDS 310","Mehmet Koyaturk","CSDS 233, CSDS 302")}
                {this.renderCourse("Senior Project in Computer Science and Data Science","CSDS 395","Departmental Faculty","Senior Standing")}


            </table>
            </body>
            </html>
        );
    }


}


//===================================================================================================================================================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Schedule />);