// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement login logic here
//     console.log('Logging in with:', email, password);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-transparent  bg-orange-100 bg-[url('./assets/img/loginpic1.jpg')] bg-saturate-100 bg-cover bg-center bg-no-repeat ">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border border-gray-300 p-2 mb-4 w-full rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border border-gray-300 p-2 mb-6 w-full rounded"
//         />
//         <button
//           onClick={handleLogin}
//           className="bg-orange-500 text-white p-2 w-full rounded hover:bg-orange-600"
//         >
//           Sign In
//         </button>
//         <div className="mt-4 text-center">
//           <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
//             Forgot Password?
//           </a>
//         </div>
//         <hr className="my-6 border-gray-300" />
//         <p className="text-sm text-center text-gray-600">
//           Don't have an account?{' '}
//           <a href="#" className="text-orange-500 hover:text-orange-600">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-orange-100 bg-[url('./assets/img/loginpic2.jpg')]  bg-contain bg-center bg-no-repeat ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-6 w-full rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-orange-500 text-white p-2 w-full rounded hover:bg-orange-600"
        >
          Sign In
        </button>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
            Forgot Password?
          </a>
        </div>
        <hr className="my-6 border-gray-300" />
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-500 hover:text-orange-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
