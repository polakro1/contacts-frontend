import axios from "axios";

const API_BASE_URL = "http://localhost:9000/contacts";
const config = { withCredentials: true };

export const getContact = async (contactId) => {
  const response = await axios.get(
    `${API_BASE_URL}/get?id=${contactId}`,
    config,
  );
  return response.data;
};

export const getContacts = async (search) => {
  const params = { search: search };
  try {
    const response = await axios.get(`${API_BASE_URL}/list`, {
      params,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateContact = async (contact) => {
  const { firstName, lastName, email, tel } = contact;
  const data = { firstName, lastName, email, tel };
  const response = await axios.put(
    `${API_BASE_URL}/update?id=${contact._id}`,
    data,
    { withCredentials: true },
  );
  return response.data;
};

export const deleteContact = async (contactId) => {
  await axios.delete(`${API_BASE_URL}/delete?id=${contactId}`, {
    withCredentials: true,
  });
};

export const createContact = async (contact) => {
  const { firstName, lastName, email, tel } = contact;
  const data = { firstName, lastName, email, tel };
  const response = await axios.post(`${API_BASE_URL}/create`, data, {
    withCredentials: true,
  });

  return response.data;
};
