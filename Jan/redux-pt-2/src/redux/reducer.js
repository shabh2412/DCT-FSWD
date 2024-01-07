const initialStudentsState = {
  students: [],
  subject: "MERN",
};
function studentsReducer(state = initialStudentsState, action = {}) {
  const type = action.type;
  const payload = action.payload;
  if (type === "students/add") {
    const newStudentsState = {
      ...state,
      students: [...state.students, payload],
    };
    return newStudentsState;
  }
  return state;
}

export { studentsReducer };