// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost/react_admin_db/signup.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       setMessage(data.message);

//       if (data.success) {
//         navigate("/login"); // redirect after signup
//       }
//     } catch (err) {
//       setMessage("Something went wrong! Make sure PHP server is running.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Admin Signup</h2>

//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-3"
//           required
//         />

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//           Signup
//         </button>

//         {message && <p className="text-center mt-3">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Signup;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost/react_admin_db/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Signup successful!");
        setTimeout(() => {
          navigate("/login"); // redirect to login page after 2 seconds
        }, 2000);
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong! Make sure PHP server is running.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">Sign Up</h2>

        <div className="space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors text-gray-900 placeholder-gray-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors text-gray-900 placeholder-gray-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors text-gray-900 placeholder-gray-400"
            required
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            Sign Up
          </button>
        </div>

        {message && (
          <p
            className={`text-center mt-5 text-sm font-medium ${
              message === "Signup successful!" ? "text-gray-700" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-gray-900 hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;



