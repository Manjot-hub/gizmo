import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    // Get the name from the input (for demo, use email before @ as name)
    const email = e.target.elements.email.value;
    let name = email.split('@')[0] || "User";
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // Save login state and name to localStorage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userName', name);

    toast.success('Login successful!');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-[#1E1E1E] p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-white"
          required
        />
        <button
          type="submit"
          className="bg-[#D8B4FE] text-black font-semibold w-full py-2 rounded hover:bg-[#b08ed1]"
        >
          Login
        </button>
      </form>
    </div>
  );
}