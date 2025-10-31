
import React, { createContext, useContext, useEffect, useState } from "react";
import { initialStudents } from "./studentsData";

const StudentsContext = createContext();

export function useStudents() {
  return useContext(StudentsContext);
}

/**
 * StudentsProvider
 * - Loads students from localStorage (if present), otherwise initialStudents
 * - Provides add/update/delete and persistence
 */
export function StudentsProvider({ children }) {
  const STORAGE_KEY = "students_portal_data_v1";
  const [students, setStudents] = useState([]);

  // load on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setStudents(JSON.parse(raw));
      } else {
        // first-time: use initial data
        setStudents(initialStudents);
      }
    } catch (err) {
      console.error("Failed to load students from storage:", err);
      setStudents(initialStudents);
    }
  }, []);

  // persist on students change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    } catch (err) {
      console.error("Failed to save students:", err);
    }
  }, [students]);

  const addStudent = (student) => {
    // student: { name, age, course, grade }
    const nextId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    const newStudent = { id: nextId, ...student };
    setStudents(prev => [newStudent, ...prev]);
    return newStudent;
  };

  const updateStudent = (id, updated) => {
    setStudents(prev => prev.map(s => (s.id === id ? { ...s, ...updated } : s)));
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const value = { students, addStudent, updateStudent, deleteStudent };

  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>;
}

