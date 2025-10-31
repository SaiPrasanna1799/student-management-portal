import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDashboard = (e) => {
    e.preventDefault();
    navigate("/studentslist");
  };

  return (
    <div className="bg-amber-200 h-screen text-center p-10">
      <h1 className="font-bold text-4xl mb-10">🎓 Student Management Portal</h1>
      <button
        onClick={handleDashboard}
        className="bg-white hover:bg-lime-200 text-xl border border-blue-300 rounded-lg px-6 py-3 shadow-lg transition-all"
      >
        Go To Dashboard
      </button>
    </div>
  );
};

export default Home;
