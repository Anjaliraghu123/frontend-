function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-blue-500 text-white p-6 rounded">Students Placed</div>
        <div className="bg-green-500 text-white p-6 rounded">Jobs</div>
        <div className="bg-purple-500 text-white p-6 rounded">Offers</div>
      </div>
    </div>
  );
}

export default Dashboard;