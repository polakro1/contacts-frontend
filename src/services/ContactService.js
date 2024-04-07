import axios from "axios";

const API_BASE_URL = "http://localhost:9000/contacts";

export const getContact = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/get?id=660d74ecf551913f92eee731`,
    {
      withCredentials: true,
    },
  );
  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get(`${API_BASE_URL}/list`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateContact = async (contact) => {
  const { firstName, lastName, email, tel } = contact;
  const data = { firstName, lastName, email, tel };
  console.log(data);
  const response = await axios.put(
    `${API_BASE_URL}/update?id=${contact._id}`,
    data,
    { withCredentials: true },
  );
  return response.data;
};
