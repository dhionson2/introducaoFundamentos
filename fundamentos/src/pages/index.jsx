
import Navegador from '@/components/Navegador'


export default function Inicio (){
    return(
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexWrap:'wrap'
      }}>
         <Navegador texto="Estiloso" destino="/estiloso" />
         <Navegador texto="Exemplo" destino="/exemplo" cor="violet"/>
         <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
         <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
         <Navegador texto="Navegação #02" destino="/cliente/sp-2/457" cor="red"/>
         <Navegador texto="Componente com Estado" destino="/estado" cor="pink"/>
         <Navegador texto="Integração com API #01" destino="/integracao_1" cor="orange"/>
         <Navegador texto="Conteudo estático" destino="/estatico" cor="#fa054a"/>
         
         
      </div>
    )

}