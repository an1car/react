import './sobre.css';

function Sobre ()
{
    return (
        <div className='texsobre'>
            <center><h1>A Grande Ideia</h1>
                <p>Com o intuito de adquirir conhecimentos de React, o <b>TrendFlix</b> foi desenvolvido
                    a partir das aulas do professor Matheus Fraga, no decorrer das aulas fui aprimorando alguns elementos do projeto.
                    O projeto inicial mostrava ao usuário apenas os filmes em exibição nos cinemas, complementando a ideia resolvi
                    acrescentar a lista de filmes que em breve estarão nos cinemas, assim como, aprimorei detalhes de designer e responsividade.
                    Atualmente as listas de exibição contam com um total de 30 filmes cada, e cada filme possui uma aba para ver os detalhes do mesmo.
                    Na aba de detalhes do filme é possível ver uma contracapa, a sinopse do filme e até mesmo ser direcionado para o trailer do filme no Youtube,
                    também é possível saber a listas dos filmes favoritos no próprio navegador.</p>

                <h1>O Desenvolvimento</h1>
                <p>O desenvolvimento da <b>TrendFlix</b> ainda está em andamento, ao decorrer dos aprendizados sobre React, ainda realizarei muitas alterações.
                    Até aqui o desenvolvido tem apenas o propósito de colocar em prática os elementos aprendidos durante o curso, por isso, bugs e falhas estão
                    sendo corrigidos aos poucos.</p>

                <h1>As Tecnologias Empregadas</h1>
                <p>Além do uso já citado de React na aplicação, também foram aplicados conhecimentos de HTML e CSS, todos os códigos foram escritos sem o
                    auxilio de frameworks ou autocompletes e isso foi um grande desafio, porém foi muito importante para a atenção aos detalhes do código.
                    No momento, a aplicação se encontra hopedada em uma plataforma livre, chamada Heroku. Além de ter o código fonte hospedado na plataforma
                    GitHub.
                </p>

                <h1>A Desenvolvedora</h1>
                <p>
                Bom, se essa aplicação te pareceu interessante, em breve você pode encontrar ainda outras, nas seguintes plataformas:<br />
                    <button><a href="https://github.com/an1car">GitHub</a></button> <br />
                    <button><a href="https://www.linkedin.com/in/anacarolineati/">LinkedIn</a></button>
                </p>

            </center>
        </div>
    )
    }
export default Sobre;