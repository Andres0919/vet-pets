import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

const Pet = (props) => {
  const { pet, editPet, deletePet } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="col-md-12 shadow p-3 mb-5 bg-body rounded">
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <span className="h1 text-capitalize mr-4">{pet.name}</span>
            <button
              className="btn btn-sm btn-warning ml-4 mx-2"
              onClick={() => editPet(pet)}
            >
              <BsPencil />
              Editar
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deletePet(pet.id)}
            >
              <BsFillTrashFill />
              Eliminar
            </button>
          </div>
          <div className="col-12 lead font-italic">
            <span className="lead mr-2">{pet.type}</span>-
            <span className="lead ml-2">{pet.breed}</span>
          </div>
        </div>
        <p className="font-weight-bold">
          Propietario:
          <span className="mx-2">{pet.ownerName}</span>-
          <span className="mx-2">{pet.ownerTel}</span>
          <button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="btn btn-link"
          >
            Ver {open ? "menos" : "más"}
          </button>
        </p>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div className="mx-4">
              <h4>Mascota</h4>
              <ul className="list-unstyled">
                <li>Fecha de cumpleaños: {pet.birthdate}</li>
              </ul>
              <h4>Propietario</h4>
              <ul className="list-unstyled">
                <li>Correo electrónico: {pet.ownerEmail}</li>
                <li>Dirección: {pet.ownerAddress}</li>
                <li></li>
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Pet;
