import Carro from './Carro';

function Garagem(props) {
    // console.log(props);
    const {
        nome,
        sobrenome,
        apresentaGaragem,
        carro1,
        carro2,
        carro3,
        carro4,
        carro5,
    } = props;
    console.log(carro1);

    return (
        <div>
            <h1>Garagem da {props.nome}</h1>
            <Carro dadosCarro={carro1} />
            <Carro dadosCarro={carro2} />
            <Carro dadosCarro={carro3} />
            <Carro dadosCarro={carro4} />
            <Carro dadosCarro={carro5} /> 
            <button onClick={() => props.apresentaGaragem(props.nome)}>
                Botao
            </button>
        </div>
    );
}

export default Garagem;
