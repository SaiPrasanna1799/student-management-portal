import { useParams } from "react-router-dom";
import { studentsData } from "./studentsData";
import { useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const {id} = useParams();
  const student = studentsData.find((s) => (s.id ===parseInt(id)))
  const navigate = useNavigate();
  return (
    <div className="bg-red-300">
      <p>Name:{student.name}</p>
      <p>Id:{student.id}</p>
      <p>course:{student.course}</p>
      <p>Grade:{student.grade}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
};
export default StudentDetails;