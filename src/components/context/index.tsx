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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
