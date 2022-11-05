import {useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './home.css';

function Home(){
    const [Filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Chama API dos filmes, com chave de acesso e linguagem
    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/now_playing',{
                params:{
                    api_key: "2a9acdcbb759f30c1835eb875127ef05",
                    language: "pt-BR",
                    page:1,
                }
            })
            //fecha página de loading
            setFilmes(response.data.results.slice(0,10)) //limita a quantidade da lista de filmes
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
        <div className='container'>
            <div className='listafilme'>
                {Filmes.map((filme) =>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to ={`/filme/${filme.id}`}>Acessar</Link> {/*link para acessar detalhes do filme */}
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
