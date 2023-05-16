function Carro(props) {
    // console.log(props.dadosCarro.nome)
    const verificaCarroFlex = () => {
        if (props.dadosCarro.flex === true) {
            return 'Sim';
        } else {
            return 'Não';
        }
    };

    return (
        <div>
            <h2>{props.dadosCarro.nome}</h2>
            <ul>
                <li>Cor: {props.dadosCarro.cor}</li>

                <li>Ano: {props.dadosCarro.ano}</li>

                <li>Flex: {verificaCarroFlex()}</li>
            </ul>
        </div>
    );
}

export default Carro;
