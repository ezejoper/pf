import React,{ useEffect  }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../Redux/actions";
import '../Detail/MovieDetail.styles.css'
import Comment from "../Comment/Comment";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export default function MovieDetail(){
    const dispatch = useDispatch()
    const idMovie=useParams()
    const movieDet=useSelector(state=>state.movieDetail)
    console.log(movieDet)

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
        dispatch(getMovieDetail(idMovie.id))
    },[dispatch])

    return(
        <div>
            <NavBar />
            <div className="contenedor">
                <h2 className="pg">{movieDet.Rated}</h2>
                <h2 className="title">{movieDet.Title}</h2>
                <img className='movieImg' src={movieDet.Poster} alt="" />
                <div className="texto">
                
                
                <p><b>Sinopsis: </b> {movieDet.Plot}</p>
                <p><b>Genero: </b> {movieDet.Genre}</p>
                <p><b>Actores: </b> {movieDet.Actors}</p>
                <p><b>Director: </b> {movieDet.Director}</p>
                <p><b>Duracion: </b> {movieDet.Runtime} min</p>
                <p><b>Lenguage: </b> {movieDet.Language}</p>
                </div>
                <div className="divTrailer">
                <a className="trailer" href="">Trailer</a>
                </div>
                <div className="select">
                    <select className="selectHora"name="Hora" id="">
                    <option value="">18:30</option>
                    <option value="">20:30</option>
                    <option value="">22:30</option>
                    <option value="">00:30</option>
                    </select>
                    <select className="selectDia" name="Dia" id="">
                    <option value="">Hoy</option>
                    <option value="">Mañana</option>
                    <option value="">Proxima Fecha</option>
                    <option value="">Proxima Fecha</option>
                    </select>
                </div>
                <div className="botont">
                <button className="botoncomprar">Comprar</button>
                </div>
                <Comment/>
                {movieDet.comments && movieDet.comments.length>0 ? movieDet.comments.map(e=>{
                    return(
                        <div class="card p-3">

                        <div class="d-flex justify-content-between align-items-center"/>

                        <div class="user d-flex flex-row align-items-center"/>


                        <span><small class="font-weight-bold text-primary">@{e.user.username}:</small> <small class="font-weight-bold">{e.Text}</small></span>

                        </div>

                    )
                }): <div>NO HAY COMENTARIOS</div>}
                
            </div>
            <Footer />
        </div> 
    )
}

