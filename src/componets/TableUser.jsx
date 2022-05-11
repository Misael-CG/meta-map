import React, { useState } from "react";
import AddOrUpdateUser from "./Add0rUpdateUser";
import User from "./User";
import { Container, Row, Col, Table, Button } from "reactstrap";

const TableUser = ({ users, setUsers, user, setUser }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteUser = (id) => {
    const usersUpdate = users.filter((user) => user._id !== id);
    setUsers(usersUpdate);
  };
  return (
    <Container fluid className="p-5">
      <Row className="d-flex justify-content-center mb-5">
        {users && users.length ? (
          <>
            <Row className="p-5">
              <Col>
                {" "}
                <h1 className="text-center">Usuarios</h1>
              </Col>
              <Col className="d-flex justify-content-center">
                {" "}
                <Button
                  color="primary"
                  className="text-white fw-bold"
                  onClick={toggle}
                >
                  Add user
                </Button>
                <AddOrUpdateUser
                  {...{
                    modal,
                    toggle,
                    setUsers,
                    users,
                    setModal,
                    user,
                    setUser,
                  }}
                />
              </Col>
            </Row>

            <Row>
              <Table hover bordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Hub</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <User
                      {...{ user, deleteUser, setModal, setUser }}
                      key={user._id}
                    />
                  ))}
                </tbody>
              </Table>
            </Row>
          </>
        ) : (
          <>
            <h1 className="text-center"> Agregue Usuarios</h1>
            <Button>Add user</Button>
          </>
        )}
      </Row>
    </Container>
  );
};

export default TableUser;
