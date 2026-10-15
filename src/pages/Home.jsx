import Greetings from "../components/Greetings";

const visitorName = window.prompt('Qual seu nome?') || "Visitante";

function Home() {
    return(
        <Greetings nome={visitorName}/>
    )
};

export default Home;