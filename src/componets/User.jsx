import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
const User = ({ user, deleteUser, setModal, setUser }) => {
  const { name, email, role, hub, _id } = user;
  const handlerUpdate = () => {
    setUser(user);
    setModal(true);
  };
  const handlerDelete = () => {
    if (window.confirm("¿Seguro que quiere eliminar este usuario?")) {
      deleteUser(_id);
    }
  };
  return (
    <>
      <tr key={_id}>
        <th scope="row">{name}</th>
        <td>{email}</td>
        <td>{role}</td>
        <td>{hub}</td>
        <td className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faPencil} onClick={handlerUpdate} /> &nbsp;
          &nbsp; &nbsp;
          <FontAwesomeIcon icon={faTrash} onClick={handlerDelete} />
        </td>
      </tr>
    </>
  );
};

export default User;
