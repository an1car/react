import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import './filme-info.css';
import api from '../../services/api';
import {toast} from 'react-toastify'

function Filme(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  // chave e linguagem para capturar a API
  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "2a9acdcbb759f30c1835eb875127ef05",
          language: "pt-BR",
        }
      })

      // função para carregar mensagem de loading
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })

      .catch(()=>{
        navigate('*')
      })
    }

    // função para carregar mensagem de loading
    loadFilme();
    return () => {
    }
  }, [navigate, id])

  // salvar filme
  function salvarFilme(){
    const minhaLista = localStorage.getItem("@trendFlix");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filme.id)

    // caso o filme já esteja salvo
    if (hasFilme){
      toast.warn("ESTE FILME JÁ ESTÁ NA SUA LISTA");
      return;
    }

    // caso o filme tenha sido salvo
    filmesSalvos.push(filme);
    localStorage.setItem("@trendFlix", JSON.stringify(filmesSalvos));
    toast.success("FILME SALVO COM SUCESSO!");
  }
    
  // mensagem de loading
  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  
  // retornando filmes da API
  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      {/*retornando sinopse e classificação  */}
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição: {filme.vote_average} / 10</strong>
      
      {/* área de botões Salvar e Trailer */}
      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme;