import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
const AddUser = ({
  modal,
  toggle,
  setUsers,
  users,
  setModal,
  user,
  setUser,
}) => {
  const initialStatesValues = {
    name: "",
    email: "",
    hub: "",
    role: "",
    password: "",
  };
  const [values, setValues] = useState(initialStatesValues);
  useEffect(() => {
    if (Object.keys(user).length > 0)
      setValues({
        name: user.name,
        email: user.email,
        hub: user.hub,
        role: user.role,
        password: "",
      });
  }, [user]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const objectUser = {
      ...values,
      // _id: ,
      // __v: 0,
    };
    if (user._id) {
      objectUser._id = user._id;
      const usersUpdate = users.map((userState) =>
        userState._id === user._id ? objectUser : userState
      );
      setUsers(usersUpdate);
      setUser({});
      setModal(false);
    } else {
      objectUser._id = generarId();
      objectUser.__v = 0;
      setUsers([...users, objectUser]);

      setModal(false);
    }
    setValues(initialStatesValues);
  };
  const getValues = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agrega un Nuevo usuario</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Nombre Completo</Label>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="Pero Perez"
                value={values.name}
                onChange={getValues}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Correo Electronico</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="perdro@dominio.com"
                value={values.email}
                onChange={getValues}
              />
            </FormGroup>
            <FormGroup>
              <Label for="hub">Hub</Label>
              <Input
                type="text"
                name="hub"
                id="hub"
                placeholder="hub"
                value={values.hub}
                onChange={getValues}
              />
            </FormGroup>
            <FormGroup>
              <Label for="role">Role</Label>
              <Input
                type="text"
                name="role"
                id="role"
                placeholder="Admin or userX"
                value={values.role}
                onChange={getValues}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={values.password}
                onChange={getValues}
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Add
            </Button>{" "}
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddUser;
