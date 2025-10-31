import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "./StudentsContext";

export default function AddStudent() {
  const { addStudent } = useStudents();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", age: "", course: "", grade: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.course.trim() || !form.grade.trim()) {
      setError("Please fill all required fields (name, course, grade).");
      return;
    }
    // convert age to number (optional)
    const student = { name: form.name.trim(), course: form.course.trim(), grade: form.grade.trim(), age: form.age ? Number(form.age) : "" };
    addStudent(student);
    navigate("/students");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 flex items-start justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Add New Student</h2>

        {error && <div className="text-red-600 mb-3">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm">Age</label>
            <input name="age" value={form.age} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm">Course</label>
            <input name="course" value={form.course} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block text-sm">Grade</label>
            <input name="grade" value={form.grade} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Add</button>
            <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
