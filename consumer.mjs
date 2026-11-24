import axios from "axios";

export async function listRecords() {
  return fetch("/v1/bookings");
}

export async function createRecord(name, status) {
  return axios.post("/v1/bookings", { name, status });
}

export async function updateRecord(id, name) {
  return axios.patch(`/v1/bookings/${id}`, { name });
}

export async function exportRecords() {
  return fetch("/v1/bookings/export");
}
