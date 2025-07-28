import axios from "axios";

const API_BASE_URL = "http://localhost:8070";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials) => api.post("/user/login", credentials),
  register: (userData) => api.post("/user/new", userData),
  logout: () => api.post("/user/logout"),
};

export const hotelAPI = {
  getAll: () => api.get("/hotel"),
  getById: (id) => api.get(`/hotel/${id}`),
  create: (hotelData) => api.post("/hotel", hotelData),
  update: (id, hotelData) => api.put(`/hotel/${id}`, hotelData),
  delete: (id) => api.delete(`/hotel/${id}`),
  book: (bookingData) => api.post("/hotel/book", bookingData),
};

export const tourGuideAPI = {
  getAll: () => api.get("/tourguide"),
  getById: (id) => api.get(`/tourguide/${id}`),
  create: (guideData) => api.post("/tourguide", guideData),
  update: (id, guideData) => api.put(`/tourguide/${id}`, guideData),
  delete: (id) => api.delete(`/tourguide/${id}`),
};

export const packageAPI = {
  getAll: () => api.get("/package"),
  getById: (id) => api.get(`/package/${id}`),
  create: (packageData) => api.post("/package", packageData),
  update: (id, packageData) => api.put(`/package/${id}`, packageData),
  delete: (id) => api.delete(`/package/${id}`),
  search: (query) => api.get(`/package/search?q=${query}`),
};

export const paymentAPI = {
  create: (paymentData) => api.post("/payment", paymentData),
  getHistory: (userId) => api.get(`/payments/history/${userId}`),
  getById: (id) => api.get(`/payment/${id}`),
  update: (id, paymentData) => api.put(`/payment/${id}`, paymentData),
};

export const roomAPI = {
  getAll: () => api.get("/room"),
  getByHotel: (hotelId) => api.get(`/room/hotel/${hotelId}`),
  create: (roomData) => api.post("/room", roomData),
  update: (id, roomData) => api.put(`/room/${id}`, roomData),
  delete: (id) => api.delete(`/room/${id}`),
};

export default api;
