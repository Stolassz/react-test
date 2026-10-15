import './Greetings.css'

function Greetings({nome, mensagem = "seja bem vindo(a)!"}) {
    return(
        <div className="greeting">
            <span className="greeting_eyebrow">React - Primeiros Passos</span>

            <h1>{nome}, {mensagem}</h1>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nesciunt architecto commodi! Deserunt molestiae cum ullam corrupti voluptas nemo porro. Provident eveniet facilis molestias repellendus, sint veritatis eaque nesciunt earum.</p>
        </div>
    );
};

export default Greetings;