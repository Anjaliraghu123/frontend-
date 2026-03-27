import API from "./base";

export const applyJob = (data) => API.post("/applications", data);
export const getApplications = () => API.get("/applications");

// ✅ ADD THIS (for Admin Panel)
export const updateStatus = (id, status) =>
  API.put(`/applications/${id}`, { status });