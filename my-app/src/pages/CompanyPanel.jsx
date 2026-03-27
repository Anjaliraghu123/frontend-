import { useState, useEffect } from "react";
import { getJobs, createJob } from "../services/jobService";

function CompanyPanel() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ companyName:"", role:"" });

  useEffect(() => {
    getJobs().then(res => setJobs(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(form);
    alert("Job Posted");
    };

  return (
    <div className="p-6">
      <h1>Company Panel</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Company" onChange={(e)=>setForm({...form,companyName:e.target.value})}/>
        <input placeholder="Role" onChange={(e)=>setForm({...form,role:e.target.value})}/>
        <button>Post Job</button>
      </form>

      {jobs.map(job => (
        <div key={job._id}>{job.role}</div>
      ))}
    </div>
  );
}

export default CompanyPanel;