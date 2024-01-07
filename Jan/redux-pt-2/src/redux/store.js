import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer } from "./reducer";

export const studentsStore = configureStore({
  reducer: studentsReducer
});