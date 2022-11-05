import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './favoritos.css'
import {toast} from 'react-toastify'

function Favoritos(){
    const[filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@trendFlix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@trendFlix", JSON.stringify(filtroFilmes))
        toast.success("FILME EXCLUÍDO")
    }

    return(
        <div className='meusfilmes'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span>VOCÊ NÃO POSSUI FILMES SALVOS :( </span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;