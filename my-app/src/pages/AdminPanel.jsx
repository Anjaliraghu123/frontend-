import { useEffect, useState } from "react";
import { getApplications, updateStatus } from "../services/applicationService";

export default function AdminPanel() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications().then((res) => setApplications(res.data));
  }, []);

  const handleStatusUpdate = (id, status) => {
    updateStatus(id, { status }).then(() => {
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status } : app))
      );
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Panel - Applications</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Student</th>
              <th className="py-2 px-4 text-left">Job</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{app.studentId?.name}</td>
                <td className="py-2 px-4">{app.jobId?.title}</td>
                <td className="py-2 px-4">{app.status}</td>
                <td className="py-2 px-4 space-x-2 text-center">
                  <button
                    onClick={() => handleStatusUpdate(app._id, "Shortlisted")}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Shortlist
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(app._id, "Rejected")}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}