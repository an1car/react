import {useEffect, useState} from 'react';
import api from '../../services/api';
import './breve.css';

function Breve(){
    const [Filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Chama API dos filmes, com chave de acesso e linguagem
    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/upcoming',{
                params:{
                    api_key: "2a9acdcbb759f30c1835eb875127ef05",
                    language: "pt-BR",
                    page:1
                }
            })
            //fecha página de loading
            setFilmes(response.data.results.slice(3,30)) //limita a quantidade da lista de filmes
            setLoading(false);
        }
        loadFilmes();
    },[])

    //abre página de loading até que a API carregue
    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filme...</h2>
            </div>
        )
    }

    //retorna lista de filmes
    return(
        <div className='titulo-b'>
            <h1>Filmes a Estrear em Breve</h1>
            <div className='container'>
                <div className='listafilme-b'>
                    {Filmes.map((filme) =>{
                        return(
                            <article key={filme.id}>
                                <strong>{filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Breve;
