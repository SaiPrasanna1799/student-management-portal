import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudents } from "./StudentsContext";

export default function StudentDetails() {
  const { id } = useParams();
  const { students, deleteStudent } = useStudents();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === parseInt(id, 10));

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Student not found</h2>
          <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 border rounded">
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-green-50">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">{student.name}</h1>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Grade:</strong> {student.grade}</p>

        <div className="mt-6 flex gap-3">
          <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Back</button>
          <button onClick={() => navigate(`/edit-student/${student.id}`)} className="px-4 py-2 bg-yellow-400 rounded">
            Edit
          </button>
          <button
            onClick={() => {
              if(window.confirm("Are you sure you want to delete this student?")) {
                deleteStudent(student.id);
                navigate("/students");
              }
            }}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
