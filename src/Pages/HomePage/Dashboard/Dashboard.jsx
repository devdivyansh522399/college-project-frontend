import React from "react";
import HomePage from "../HomePage";
import Navbar from "../../../Components/Navbar";
import NavbarDashboard from "./Component/NavbarDashboard";
import Reports from "./Component/Reports";
import Appointment from "./Component/Appointment";

const Dashboard = () => {
  return (
    <HomePage>
      <Navbar />
      <div className="mx-4 bg-Blue p-2 flex flex-row justify-between items-center rounded-lg shadow">
        <NavbarDashboard />
      </div>
      <div className="mx-4 p-2 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 my-2">My Reports</h1>
        <div className="flex flex-row flex-wrap justify-between">
          <Reports />
          <Reports />
          <Reports />
          <Reports />
          <Reports />
          <Reports />
        </div>
      </div>
      <div className="mx-4 p-2 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 my-2">Upcoming Appointments</h1>
        <Appointment />
      </div>
    </HomePage>
  );
};

export default Dashboard;
