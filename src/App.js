import React, { useState, useEffect } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import Pet from "./Pet";
import PetForm from "./PetForm";
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
  const [petsMirror, setPetsMirror] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [search, setSearch] = useState("");

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
    setPet(petModel());
    setIsEditMode(false);
  };

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

  useEffect(() => {
    (async () => {
      setPetsMirror(() =>
        pets.filter((pet) => pet.name.toLowerCase().includes(search))
      );
    })();
  }, [pets]);

  const addPet = async (e) => {
    e.preventDefault();

    const result = await addDocument(collection, pet);
    if (!result.statusResponse) {
      // setError(result.error);
      return;
    }

    const id = result.data.id;
    setPets([...pets, { ...pet, id }]);

    handleClose();
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

    handleClose();
  };

  const closeConfirmDeletePet = () => {
    setId(null);
    setShowConfirmModal(false);
  };

  const openConfirmModal = (petId) => {
    setId(petId);
    setShowConfirmModal(true);
  };

  const deletePet = async (petId) => {
    const result = await deleteDocument(collection, petId);
    if (!result.statusResponse) {
      // setError(result.error);
      return;
    }

    const petsUpdated = pets.filter((item) => item.id !== petId);
    setPets(petsUpdated);

    closeConfirmDeletePet();
  };

  const filterPets = (e) => {
    const str = e.target.value.toLowerCase();
    setSearch(str);
    const petsFiltered = pets.filter((pet) =>
      pet.name.toLowerCase().includes(str)
    );
    setPetsMirror(petsFiltered);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between my-3">
        <h1>Vet Pets - Mascotas registradas</h1>
        <Button variant="primary" onClick={handleShow}>
          Registrar mascota
        </Button>
      </div>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar mascota..."
          onChange={filterPets}
          value={search}
        />
      </div>
      <hr />
      <Modal show={showConfirmModal}>
        <Alert className="bg-warning text-white">¿Está seguro(a)?</Alert>

        <Modal.Body>
          <p>¿Está seguro(a) de eliminar este registro? </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={closeConfirmDeletePet} variant="light">
            No
          </Button>
          <Button onClick={() => deletePet(id)} variant="danger">
            Si, Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
      <PetForm
        addPet={addPet}
        handleClose={handleClose}
        isEditMode={isEditMode}
        pet={pet}
        setProperty={setProperty}
        showModal={showModal}
        updatePet={updatePet}
      />

      <div className="container">
        <div className="row">
          {petsMirror.map((pet) => (
            <Pet
              key={pet.id}
              openConfirmModal={openConfirmModal}
              pet={pet}
              editPet={editPet}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
