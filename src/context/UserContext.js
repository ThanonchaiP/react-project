import React from "react";

//สร้าง context
export const UserStoreContext = React.createContext();

const UserStoreProvider = ({ children }) => {
  const [profile, setProfile] = React.useState(null);
  const userStore = {
    profile: profile,
    updateProfile: (profile) => setProfile(profile),//update profile หากมีการ login หรือ edit
  };

  return (
    <UserStoreContext.Provider value={userStore}>
      {children}
    </UserStoreContext.Provider>
  );
};

export default UserStoreProvider;
