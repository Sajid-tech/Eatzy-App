import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    window.location.reload();
    // navigate(0);
  };

  return (
    <div className="relative h-screen  w-full bg-gradient-to-r from-indigo-500 to-purple-600">
      <Confetti />
      {loading ? (
        <PropagateLoader color="#ffffff" />
      ) : (
        <div className="max-w-sm mx-auto text-center">
          <div className="flex justify-center">
            <i class="text-9xl text-green-500 ">✓</i>
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Order Successful!
          </h2>
          <p className="text-gray-200">
            Your order has been sucessfully placed. We will send you a
            confirmation email shortly.
          </p>
          <div
            onClick={handleNavigate}
            className="mt-8 inline-block bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer"
          >
            What are you craving next?
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
