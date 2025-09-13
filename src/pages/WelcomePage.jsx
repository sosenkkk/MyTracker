import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        Welcome to the Dashboard App
      </h1>
      <p className="text-lg text-blue-700 mb-10 text-center">
        Choose a dashboard to manage your products effectively.
      </p>
      <div className="flex gap-6">
        <Link
          to="/health"
          className="px-6 py-4 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition"
        >
          Health Products
        </Link>
        <Link
          to="/electrical"
          className="px-6 py-4 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          Electrical Appliances
        </Link>
      </div>
    </div>
  );
}
