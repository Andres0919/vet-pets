import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PetForm = (props) => {
  const {
    addPet,
    handleClose,
    isEditMode,
    pet,
    setProperty,
    showModal,
    updatePet,
  } = props;
  return (
    <>
      <Modal show={showModal} size="lg" animation="false">
        <Form onSubmit={isEditMode ? updatePet : addPet}>
          <Modal.Header closeButton>
            <Modal.Title>
              Hello world Vet {isEditMode ? "Edición" : "Creación"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.name}
            />
            <input
              name="type"
              type="text"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.type}
            />
            <input
              name="breed"
              type="text"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.breed}
            />
            <input
              name="birthdate"
              type="date"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.birthdate}
            />
            <input
              name="ownerName"
              type="text"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.ownerName}
            />
            <input
              name="ownerTel"
              type="text"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.ownerTel}
            />
            <input
              name="ownerEmail"
              type="text"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.ownerEmail}
            />
            <input
              name="ownerAddress"
              type="text"
              className="form-control"
              placeholder="Enter pet name"
              onChange={setProperty}
              value={pet.ownerAddress}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Cerrar</Button>
            <Button type="primary">
              {isEditMode ? "Actualizar" : "Crear"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PetForm;
