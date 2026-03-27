export default function JobCard({ job, apply }) {
  return (
    <div className="border p-3">
      <h3>{job.title}</h3>
      <button onClick={() => apply(job._id)}>Apply</button>
    </div>
  );
}