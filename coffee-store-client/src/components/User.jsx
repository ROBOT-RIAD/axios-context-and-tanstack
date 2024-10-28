const User = ({ user, setusers, users }) => {
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
      <tr>
        <td>{user.email}</td>
        <td>{user.createAt}</td>
        <td>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </td>
      </tr>
    );
  };
  
  export default User;
  