import API from "../services/base";

export const getJobs = () => API.get("/jobs");
export const createJob = (data) => API.post("/jobs", data);