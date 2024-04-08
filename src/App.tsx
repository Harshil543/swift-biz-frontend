import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LeadingPage from "./components/landing-page";
import LogIn from "./components/login";
import CardList from "./components/cardslist";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import CardDetails from "./components/common/card-details";
import "primeicons/primeicons.css";
import { useSelector } from "react-redux";

function App() {
  function PrivateRoute({ children }: any) {
    const user = useSelector((state: any) => state.auth.user);
    return user?.id && user?.accessToken ? children : <Navigate to="/login" />;
  }

  function ProtectedRoute({ children }: any) {
    const user = useSelector((state: any) => state.auth.user);
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
        <Route
          path="/cards-details/:id"
          element={
            <PrivateRoute>
              <CardDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
