import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

export default function Jsx() {
    const a = 4;
    const b = 3;
    console.log(a * b);
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        setRandomNumber(Math.random());
    }, []);

    const obj = { nome: 'Marcos', idade: 44 };

    return (
        <Layout titulo="Integração JavaScript e JSX">
            <div>
               
                <div className="center">
                    <span className="text">Fazendo a multiplicação de minhas constantes</span>
                    <div>{a * b}</div>
                </div>
                <div className="center">
                    <span className="text">Gerando um número random</span>
                    <div>{randomNumber}</div>
                </div>
                <div className="center">
                    <p>{JSON.stringify(obj)}</p>
                </div>
            </div>
        </Layout>
        
    );
}
