import React, { useState } from "react";

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

  const setProperty = ({ target }) => {
    const { name, value } = target;
    setPet((pet) => ({ ...pet, [name]: value }));
  };

  const addPet = (e) => {
    e.preventDefault();
    const id = pets.length + 1;
    setPets([...pets, { ...pet, id }]);
    setPet(petModel());
  };

  const editPet = (pet) => {
    setId(pet.id);
    setPet(petModel(pet));
    setIsEditMode(true);
  };

  const updatePet = (e) => {
    e.preventDefault();

    const petsUpdated = pets.map((item) =>
      item.id === id ? { ...pet, id } : item
    );
    setPets(petsUpdated);
    setPet(petModel());
    setIsEditMode(false);
  };

  const deletePet = (petId) => {
    const petsUpdated = pets.filter((item) => item.id !== petId);
    setPets(petsUpdated);
  };

  return (
    <div>
      <h1>Hello world Vet {isEditMode ? "Edición" : "Creación"}</h1>
      <form onSubmit={isEditMode ? updatePet : addPet}>
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
        <button>{isEditMode ? "Actualizar" : "Crear"}</button>
      </form>
      <table>
        {pets.map((pet) => (
          <li>
            {JSON.stringify(pet)}{" "}
            <button onClick={() => editPet(pet)}>Editar</button>
            <button onClick={() => deletePet(pet.id)}>Eliminar</button>
          </li>
        ))}
      </table>
    </div>
  );
}

export default App;
