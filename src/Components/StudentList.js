import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStudents } from "./StudentsContext";

export default function StudentsList() {
  const { students, deleteStudent } = useStudents();
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyActive, setShowOnlyActive] = useState(false); // example filter, if you have a status
  const navigate = useNavigate();

  // filtered, memoized
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    let list = students;
    if (q) {
      list = list.filter((s) => s.name.toLowerCase().includes(q) || (s.course || "").toLowerCase().includes(q));
    }
    // example: filter by active (if you had a status)
    if (showOnlyActive) {
      list = list.filter((s) => s.status === "Active");
    }
    return list;
  }, [students, searchTerm, showOnlyActive]);

  return (
    <div className="min-h-screen p-8 bg-red-100">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Students Dashboard</h2>
          <div className="space-x-3">
            <button
              onClick={() => navigate("/add-student")}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              + Add Student
            </button>
            <Link to="/" className="px-4 py-2 bg-gray-200 rounded">
              Home
            </Link>
          </div>
        </header>

        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          {/* Optional filter */}
          {/* <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={showOnlyActive} onChange={e => setShowOnlyActive(e.target.checked)} />
            <span>Only Active</span>
          </label> */}
        </div>

        {filtered.length === 0 ? (
          <div className="p-8 text-center text-gray-600">No students found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((student) => (
              <article key={student.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-600">ID: {student.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{student.course}</p>
                    <p className="text-sm text-gray-500">Grade: {student.grade}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    to={`/students/${student.id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => navigate(`/edit-student/${student.id}`)}
                    className="px-3 py-1 bg-yellow-400 text-black rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if(window.confirm(`Delete student ${student.name}?`)) deleteStudent(student.id);
                    }}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
