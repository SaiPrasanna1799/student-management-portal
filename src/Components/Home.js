import { useNavigate } from "react-router-dom"

const Home = () => {
 const navigate = useNavigate();
    const handleDashboard = (e) =>{
        e.preventDefault();
        navigate('/studentslist');
    };
  return (
    <div className='bg-amber-200 h-screen text-center p-5'>
        <h1 className='font-bold text-3xl'>Student Management Portal</h1>
        <div>
            <button className='bg-white m-5 text-xl border border-blue-200 rounded-md w-72' onClick={handleDashboard}>Go To Dashboards</button>
        </div>
    </div>
  )
}

export default Home;