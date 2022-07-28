import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, verifyRole, getComments } from "../../Redux/actions";
import NavBar from "../NavBar/NavBar";
import styles from "./Profile.module.css";
import {useHistory} from 'react-router-dom'

const Perfil = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(verifyRole());
  }, []);
  const allUsers = useSelector((state) => state.usuarios);
  let userIdCheck = useSelector((state) => state.id);
  const currentUser = allUsers.filter((u) => u.id === userIdCheck);
  // console.log("este es el currentUser",currentUser)

  const comments = useSelector((state) => state.comments);
  const commentUser = comments.filter((u) => u.userId === currentUser[0].id);

  const history = useHistory()
  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <div>
      <NavBar />
      <div className={styles.headerDiv}>
        <i class="bi bi-person-circle" style={{ fontSize: "64px" }}></i>
        <h1 className="display-5 fw-bold ml-4">
          {currentUser.length && currentUser[0].username}
        </h1>
      </div>

      <div>
        <hr class="bg-warning" />
      </div>

      {currentUser.length ? (
        <div>
          <div className={styles.accionesDiv}>
          <i class="bi bi-envelope" style={{ fontSize: "50px" }}></i><h3 className={styles.miPerfil}>Tu e-mail:</h3> 
          </div>
          <div class="container d-flex">
          <p class="fs-5 ps-5">{currentUser[0].email}</p>
          </div>
          <div>
            <hr class="bg-warning" />
          </div>
          {/* <div class="container"> */}
            <div className={styles.accionesDiv}>
          <i class="bi bi-chat-quote" style={{ fontSize: "50px" }}></i><h3 className={styles.miPerfil}>Tus comentarios:</h3>
          </div>
            {commentUser.length ? (
              commentUser.map((c) => {
                return (
                  // <div >
                    <div class="container d-flex justify-content-around">
                        <div class="col-5">
                          <h4 className="ps-5">{c.movie.Title}:</h4>
                        </div>
                        <div class="col">
                          <p class="fs-5">"{c.Text}"</p>
                      {/* </div> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className={styles.miPerfil}>No has comentado nada todavía</p>
            )}
            {/* </div> */}
          <div>
            <hr class="bg-warning" />
          </div>

          <div className={styles.accionesDiv}>
            <i
              class="bi bi-wrench-adjustable-circle"
              style={{ fontSize: "64px" }}
            ></i>
            <h2 className={styles.miPerfil}>Acciones</h2>
          </div>
          <div className={styles.buttons}>
            <button type="submit" class="btn btn-warning" onClick={()=>history.push('/changepassword')}>
              Cambiar contraseña
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button className="btn btn-warning d-flex justify-content-center">
            {" "}
            <a href="/login">Inicia Sesion</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Perfil;
