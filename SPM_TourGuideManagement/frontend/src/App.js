import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

// Import existing components (we'll modernize these gradually)
import AddPayment from "./components/AddPayment";
import DisplayPayment from "./components/DisplayPayment";
import UpdatePayment from "./components/UpdatePayment";
import Login from "./components/auth/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import PaymentHistory from "./components/PaymentHistory";
import PrintPayments from "./components/PrintPayment";
import Checkout from "./components/Checkout";
import AddTourguide from "./components/AddTourguide";
import AllTourguides from "./components/AllTourguides";
import updateTourguide from "./components/UpdateTourguide";
import AddHotel from "./components/AddHotel";
import BookingHotel from "./components/BookingHotel";
import AllHotel from "./components/AllHotel";
import EditHotel from "./components/EditHotel";
import ViewHotel from "./components/ViewHotel";
import report from "./components/report";
import AddPackage from "./components/addPackage";
import manager from "./components/PackManager";
import sith from "./components/edit";
import cusPack from "./components/CustomerPack";
import CusPackage from "./components/customizePackage";
import findMyPack from "./components/findMyPack";
import AllPacks from "./components/AllPacks";
import EditPack from "./components/PackUpdate";
import guidereport from "./components/guidereport";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  // For now, we'll use a simple check. Later we can enhance this with proper auth
  const isAuthenticated = localStorage.getItem("user") !== null;

  if (!isAuthenticated) {
    return <Navigate to="/user/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/new+user/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/add/payment+details"
            element={
              <ProtectedRoute>
                <AddPayment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/display/payment+details/:userId"
            element={
              <ProtectedRoute>
                <DisplayPayment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/update/payment+details/:userId"
            element={
              <ProtectedRoute>
                <UpdatePayment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/home/:userId"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/view/payment+history/:userId"
            element={
              <ProtectedRoute>
                <PaymentHistory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/print/payment+history"
            element={
              <ProtectedRoute>
                <PrintPayments />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          {/* Tour Guide Routes */}
          <Route path="/all/tourguide" element={<AllTourguides />} />
          <Route path="/add/tourguide" element={<AddTourguide />} />
          <Route path="/update/tourguide/:id" element={<updateTourguide />} />

          {/* Hotel Routes */}
          <Route path="/admin/hotel" element={<Layout />} />
          <Route path="/add/hotel" element={<AddHotel />} />
          <Route path="/all/hotel" element={<AllHotel />} />
          <Route path="/update/hotel/:id" element={<EditHotel />} />
          <Route path="/print/hotel" element={<report />} />
          <Route path="/view/hotel" element={<ViewHotel />} />
          <Route path="/insert/hotel" element={<BookingHotel />} />
          <Route path="/landing/page" element={<Layout />} />

          {/* Package Routes */}
          <Route path="/add/package" element={<AddPackage />} />
          <Route path="/view/cuspackage" element={<sith />} />
          <Route path="/search/destination" element={<cusPack />} />
          <Route path="/edit/cusPack" element={<CusPackage />} />
          <Route path="/find/cusPack" element={<findMyPack />} />
          <Route path="/page/manager" element={<manager />} />
          <Route path="/manage/AllPacks" element={<AllPacks />} />
          <Route path="/update/packs/id" element={<EditPack />} />
          <Route path="/guidereport" element={<guidereport />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
};

export default App;
