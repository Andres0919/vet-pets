import React, { useState } from "react";

const dataInitial = () => ({
  ownerAddress: "",
  ownerEmail: "",
  ownerName: "",
  ownerTel: "",
  petBirthdate: new Date().toString(10),
  petBreed: "",
  petName: "",
  petType: "",
});

function App() {
  const [pet, setPet] = useState(dataInitial());
  const [pets, setPets] = useState([]);

  const addPet = () => setPet(dataInitial());

  const setProperty = ({ target }) => {
    const { name, value } = target;
    setPet((pet) => ({ ...pet, [name]: value }));
  };

  return (
    <div>
      <h1>Hello world Vet</h1>
      <form onSubmit={addPet}>
        <input
          name="petName"
          type="text"
          className="form-control"
          placeholder="Enter pet name"
          onChange={setProperty}
          value={pet.petName}
        />
        <input
          name="petType"
          type="text"
          className="form-control"
          placeholder="Enter pet name"
          onChange={setProperty}
          value={pet.petType}
        />
        <input
          name="petBreed"
          type="text"
          className="form-control"
          placeholder="Enter pet name"
          onChange={setProperty}
          value={pet.petBreed}
        />
        <input
          name="petBirthdate"
          type="date"
          className="form-control"
          placeholder="Enter pet name"
          onChange={setProperty}
          value={pet.petBirthdate}
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
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
