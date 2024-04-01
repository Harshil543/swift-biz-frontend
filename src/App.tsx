import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LeadingPage from "./components/landing-page";
import LogIn from "./components/login";
import CardList from "./components/cardslist";
import { useContext } from "react";
import { UserContext } from "./components/context";

function App() {
  function PrivateRoute({ children }: any) {
    const { user } = useContext(UserContext);
    return user?.id && user?.accessToken ? children : <Navigate to="/login" />;
  }

  function ProtectedRoute({ children }: any) {
    const { user } = useContext(UserContext);
    return user?.id && user?.accessToken ? (
      <Navigate to="/cards-list" />
    ) : (
      children
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<LeadingPage />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <LogIn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cards-list"
          element={
            <PrivateRoute>
              <CardList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
