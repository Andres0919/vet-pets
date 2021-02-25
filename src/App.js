import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  getColletion,
  addDocument,
  updateDocument,
  deleteDocument,
} from "./actions";

const collection = "pets";
const petModel = (pet = {}) => ({
  birthdate: pet.birthdate || "",
  breed: pet.breed || "",
  name: pet.name || "",
  type: pet.type || "",
  ownerAddress: pet.ownerAddress || "",
  ownerEmail: pet.ownerEmail || "",
  ownerName: pet.ownerName || "",
  ownerTel: pet.ownerTel || "",
});

function App() {
  const [id, setId] = useState(null);
  const [pet, setPet] = useState(petModel());
  const [pets, setPets] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const setProperty = ({ target }) => {
    const { name, value } = target;
    setPet((pet) => ({ ...pet, [name]: value }));
  };

  useEffect(() => {
    (async () => {
      const result = await getColletion(collection);
      if (result.statusResponse) {
        setPets(result.data);
      }
    })();
  }, []);

  const addPet = async (e) => {
    e.preventDefault();

    const result = await addDocument(collection, pet);
    if (!result.statusResponse) {
      // setError(result.error);
      return;
    }

    const id = result.data.id;
    setPets([...pets, { ...pet, id }]);
    setShowModal(false);
    setPet(petModel());
  };

  const editPet = (pet) => {
    setId(pet.id);
    setPet(petModel(pet));
    setIsEditMode(true);
    setShowModal(true);
  };

  const updatePet = async (e) => {
    e.preventDefault();

    const result = await updateDocument(collection, id, pet);
    if (!result.statusResponse) {
      // setError(result.error);
      return;
    }

    const petsUpdated = pets.map((item) =>
      item.id === id ? { ...pet, id } : item
    );
    setPets(petsUpdated);
    setPet(petModel());
    setShowModal(false);
    setIsEditMode(false);
  };

  const deletePet = async (petId) => {
    const result = await deleteDocument(collection, petId);
    if (!result.statusResponse) {
      // setError(result.error);
      return;
    }

    const petsUpdated = pets.filter((item) => item.id !== petId);
    setPets(petsUpdated);
  };

  const handleClose = () => {
    setShowModal(false);
    setPet(petModel());
  };
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={showModal} size="lg">
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
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              {isEditMode ? "Actualizar" : "Crear"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {JSON.stringify(pet)}{" "}
            <button onClick={() => editPet(pet)}>Editar</button>
            <button onClick={() => deletePet(pet.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
