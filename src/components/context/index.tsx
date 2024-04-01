import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext<any>({
  user: null,
  setUser: () => {}
});

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    const user: any = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, []);

  const Logout = () => {
    console.log("login");
    navigate("/");
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
