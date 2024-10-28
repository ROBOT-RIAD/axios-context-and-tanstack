
import { useQuery } from "@tanstack/react-query";

const Users2 = () => {

    const { isPending,isError,error, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            return res.json();
        }
    });

    if(isPending)
    {
        return <span className="loading loading-spinner text-error"></span>
    }
    if(isError){
        return <p>{error.message}</p>
    }


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
          method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingUsers = users.filter((user) => user._id !== id);
            setusers(remainingUsers);
          }
        });
      };

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
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users2