import React from "react";
import { useDispatch } from 'react-redux';
import { filterByType, filterGenre } from "../../Redux/actions/index";


export default function FilterCartelera () {
    
    const dispatch = useDispatch();

    const handleSelectGenre = (e) => {
        e.preventDefault();
        dispatch(filterGenre(e.target.value));
    }

    const handleSelectType = (e) => {
        e.preventDefault();
        dispatch(filterByType(e.target.value))
    }

    

    
    return (
        <div className="container my-4">

          <div className="d-flex justify-content-around">
            <div className="dropdown">
              <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
                Filtro por Género
              </button>
              <ul className="dropdown-menu" style={{cursor:"pointer"}}>
                <li><a className="dropdown-item"><option value="All" onClick={(e) => handleSelectGenre(e)}>Todos</option></a></li>
                <li><a className="dropdown-item"><option value="Animación" onClick={(e) => handleSelectGenre(e)}>Animación</option></a></li>
                <li><a className="dropdown-item"><option value="Aventura" onClick={(e) => handleSelectGenre(e)}>Aventura</option></a></li>
                <li><a className="dropdown-item"><option value="Comedia" onClick={(e) => handleSelectGenre(e)}>Comedia</option></a></li>
                <li><a className="dropdown-item"><option value="Acción" onClick={(e) => handleSelectGenre(e)}>Acción</option></a></li>
                <li><a className="dropdown-item"><option value="Fantasía" onClick={(e) => handleSelectGenre(e)}>Fantasía</option></a></li>
                <li><a className="dropdown-item"><option value="Ciencia Ficción" onClick={(e) => handleSelectGenre(e)}>Ciencia-Ficcion</option></a></li>
                <li><a className="dropdown-item"><option value="Drama" onClick={(e) => handleSelectGenre(e)}>Drama</option></a></li>
              </ul>
            </div> 

            <div className="dropdown" style={{cursor:"pointer"}}>
              <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
                Filtro por Tipo 
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"><option value="All" onClick={(e) => handleSelectType(e)}>Todos</option></a></li>
                <li><a className="dropdown-item"><option value="2D" onClick={(e) => handleSelectType(e)}>2-D</option></a></li>
                <li><a className="dropdown-item"><option value="3D" onClick={(e) => handleSelectType(e)}>3-D</option></a></li>
              </ul>
            </div>     
          </div>

        </div>
    )
}