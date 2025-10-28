import { studentsData } from "./studentsData";
import { Link } from "react-router-dom";

const StudentList = () => {
  return (
    <div className="bg-red-300 h-screen">
      <h1 className="text-center font-bold">All Students</h1>
      {studentsData.map((student) => 
      <Link key={student.id} to={`/students/${student.id}`}>
      <div key={student.id}>
      {/* <p className="font-bold">{student.id}</p> */}
      <p className="font-bold">{student.name}</p>
      {/* <p className="font-bold">{student.course}</p>
      <p className="font-bold">{student.grade}</p> */}
      </div>
      </Link>
      )}
    </div>
  );
};
export default StudentList;