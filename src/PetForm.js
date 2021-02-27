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
      <Modal show={showModal} size="lg">
        <Form onSubmit={isEditMode ? updatePet : addPet}>
          <Modal.Header>
            <Modal.Title>{isEditMode ? "Editar" : "Crear"} mascota</Modal.Title>
          </Modal.Header>
          <Modal.Body className="row">
            <div className="col-12">
              <h4>Información de la mascota</h4>
            </div>
            <Form.Group className="col-6">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                className="form-control"
                placeholder="Ingresa el nombre de la mascota"
                onChange={setProperty}
                value={pet.name}
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Tipo de mascota</Form.Label>
              <Form.Control
                required
                name="type"
                type="text"
                className="form-control"
                placeholder="ej: perro, gato, loro, ... etc"
                onChange={setProperty}
                value={pet.type}
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                required
                name="breed"
                type="text"
                className="form-control"
                placeholder="Ingresa la raza"
                onChange={setProperty}
                value={pet.breed}
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <input
                required
                name="birthdate"
                type="date"
                className="form-control"
                placeholder="Enter pet name"
                onChange={setProperty}
                value={pet.birthdate}
              />
            </Form.Group>
            <div className="col-12">
              <h4>Información del propietario</h4>
            </div>
            <Form.Group className="col-6">
              <Form.Label>Nombre completo</Form.Label>
              <input
                required
                name="ownerName"
                type="text"
                className="form-control"
                placeholder="nombre del propietario"
                onChange={setProperty}
                value={pet.ownerName}
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Teléfono</Form.Label>
              <input
                required
                name="ownerTel"
                type="text"
                className="form-control"
                placeholder="ej: +57321456789"
                onChange={setProperty}
                value={pet.ownerTel}
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Correo electrónico</Form.Label>
              <input
                required
                name="ownerEmail"
                type="text"
                className="form-control"
                placeholder="random@ejemplo.com"
                onChange={setProperty}
                value={pet.ownerEmail}
              />
            </Form.Group>
            <Form.Group className="col-6">
              <Form.Label>Dirección</Form.Label>
              <input
                required
                name="ownerAddress"
                type="text"
                className="form-control"
                placeholder="Dirección de residencia"
                onChange={setProperty}
                value={pet.ownerAddress}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer class="d-flex justify-content-between px-3 my-2">
            <Button className="btn-light" onClick={handleClose}>
              Cerrar
            </Button>
            <Button
              className="text-white"
              type="submit"
              variant={isEditMode ? "warning" : "success"}
            >
              {isEditMode ? "Actualizar" : "Crear"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PetForm;
