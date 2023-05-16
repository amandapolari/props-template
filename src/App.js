import Garagem from './Componentes/Garagem';
import './styles.css';

// const nome = 'Amanda';
// const sobrenome = ' Polari';

// const apresentaGaragem = (nome) => {
//     alert(`Boas Vindas a garagem de ${nome}`);
// };

// const dadosCarro = {
//     nome: 'Twingo',
//     ano: 2003,
//     cor: 'Verde',
//     flex: false,
// };

// console.log(apresentaGaragem);

// FIXAÇÃO:
const novoNome = 'Amanda';

const apresentaGaragem = (novoNome) => {
    alert(`Boas Vindas a garagem de ${novoNome}`);
};

const listaDeCarros = [
    {
        nome: 'Chevrolet',
        ano: 2008,
        cor: 'Branco',
        flex: true,
    },
    {
        nome: 'Hyundai',
        ano: 2008,
        cor: 'Azul',
        flex: true,
    },
    {
        nome: 'Fiat',
        ano: 2008,
        cor: 'Amarelo',
        flex: false,
    },
    {
        nome: 'Peugeot',
        ano: 2008,
        cor: 'Preto',
        flex: false,
    },
    {
        nome: 'Volkswagen ',
        ano: 2008,
        cor: 'Verde',
        flex: true,
    },
];

// console.log(listaDeCarros[0])

export default function App() {
    return (
        <div>
            {/* <Garagem
                nome={nome}
                sobrenome={sobrenome}
                apresentaGaragem={apresentaGaragem}
                dadosCarro={dadosCarro}
            /> */}
            <Garagem
                nome={novoNome}
                carro1={listaDeCarros[0]}
                carro2={listaDeCarros[1]}
                carro3={listaDeCarros[2]}
                carro4={listaDeCarros[3]}
                carro5={listaDeCarros[4]}
                apresentaGaragem={apresentaGaragem}
            />
        </div>
    );
}
