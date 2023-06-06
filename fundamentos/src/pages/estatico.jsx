import Layout from "@/components/Layout";

export async function getStaticProps(){
    return {
        props:{
            numero: Math.random()
        }
    }
}

export default function Estatico(){
    return (
        <Layout titulo="Conteudo estatico">
            <div>
                {props.numero}
            </div>
        </Layout>
    )
}