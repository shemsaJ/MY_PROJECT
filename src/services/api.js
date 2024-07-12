import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const registerStudent = async (studentData) => {
  const response = await axios.post(`${API_URL}/students`, studentData);
  return response.data;
};

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const addCourse = async (courseData) => {
  const response = await axios.post(`${API_URL}/courses`, courseData);
  return response.data;
};

export const getGrades = async () => {
  const response = await axios.get(`${API_URL}/grades`);
  return response.data;
};

export const addGrade = async (gradeData) => {
  const response = await axios.post(`${API_URL}/grades`, gradeData);
  return response.data;
};
