import './App.css';
import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer } from './redux/reducer';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

function App() {


  const addStudentAction = (studentName) => {
    return {
      type: 'students/add',
      payload: studentName,
    };
  };

  // studentsStore.dispatch(addStudentAction("arun"));
  // studentsStore.dispatch(addStudentAction("kaustubh"));
  // studentsStore.dispatch(addStudentAction("pritesh"));

  // console.log(studentsStore.getState());

  // selector function
  const studentsSelector = (state) => state.students;

  const studentList = useSelector(studentsSelector);

  console.log(studentList);

  // dispatchers
  const dispatch = useDispatch();

  const subjectSelector = (state) => state.subject;

  const subject = useSelector(subjectSelector);


  // const studentList = studentsSelector(studentsStore.getState());

  // const subject = subjectSelector(studentsStore.getState());


  // console.log(subject);
  // console.log(studentList);

  const [current_student_name, set_current_student_name] = useState("");

  const handleChange = (e) => {
    set_current_student_name(e?.currentTarget?.value);
  };


  return (
    <div>
      <div>
        <input
          type="text"
          name="studentName"
          id="studentName"
          placeholder="Enter student name"
          value={current_student_name}
          onChange={handleChange}
        />
        <button onClick={() => {
          // studentsStore.dispatch(
          //   addStudentAction(current_student_name)
          // );
          dispatch(addStudentAction(current_student_name));
          // console.log(studentsStore.getState());
          // studentList.push("x");
        }} >Add</button>
      </div>
      <div>
        {
          studentList?.map((student, idx) => <p key={`${student}-${idx}`}>{idx}. {student} - {subject}</p>)
        }
      </div>

    </div>
  );
}

export default App;
