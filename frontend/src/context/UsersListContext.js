import React, { useState } from "react";

const UserListContext = React.createContext();
const USER=[{
    id:1,
    users: 'joseluis',
    passwords: 'joseluis',
    email:'joseluis@gmail.com'
    },
    {
    id:2,
    users: 'ezequiel',
    passwords: 'ezequiel',
    email: 'ezequiel@gmail.com'
    },
    {
    id:3,
    users: 'tomassacr',
    passwords: 'tomassacr',
    email:'tomassacr@gmail.com'
    },
]

export function UsersListContextProvider({ children }) {
  const [usersList, setUsersList] = useState(USER);
  return (
    <UserListContext.Provider value={{usersList, setUsersList }}>
      {children}
    </UserListContext.Provider>
  );
}


export default UserListContext;
