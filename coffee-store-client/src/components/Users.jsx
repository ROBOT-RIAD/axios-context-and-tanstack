import { useLoaderData } from "react-router-dom";
import User from "./User";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const loadusers = useLoaderData();
  const [users, setusers] = useState(loadusers);

  // useEffect(()=>{
  //   axios.get('/')
  //   .then(data => {
  //     console.log(data.data);
  //   })

  // },[])

  return (
    <div>
      <h1>Users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} users={users} setusers={setusers} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
