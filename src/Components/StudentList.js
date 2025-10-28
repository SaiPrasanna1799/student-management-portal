import { studentsData } from "./studentsData";

const StudentList = () => {
  return (
    <div>
      <h1>All Students</h1>
      {studentsData.map((student) => <p>{student.name}</p>)}
    </div>
  )
}

export default StudentList;