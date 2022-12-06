import React from "react";
import { useSelector } from "react-redux"

function Users() {

  const users = useSelector((state) => state.users)
  const total = useSelector((state) => state.users.length)

  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {
          users.map(user => {
            return (
            <li key={user.username}>{user.username}</li>
            )
          })
        }
        {/* In addition, display the total number of users curently in the store */}
        <p>
          Total Users: {total}
        </p>
      </ul>
    </div>
  );
}

export default Users;
