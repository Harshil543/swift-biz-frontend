import React, { createContext, useEffect, useState } from "react";

const UserContext: any = createContext<any>({
  user: null,
  setUser: () => {}
});

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const user: any = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, []);
  const logOut = () => {
    setUser({});
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
