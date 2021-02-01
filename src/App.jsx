import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIF'
import Pai from './components/Comunicacao/direta/Pai'
import Super from './components/Comunicacao/indireta/Super'
import Input from './components/form/input'

export default (props) =>

    <div className="App">

        <Card titulo="#09 - Input" color="#9C0F5F">
            <Input />
        </Card>

        <Card titulo="#08 - Comunicao Indireta" color="#000">
            <Super />
        </Card>

        <Card titulo="#07 - Comunicao Direta" color="#4298B5">
            <Pai sobrenome="freitas" />
        </Card>
        <Card titulo="#06 - Condicional v2" color="#FA6900">
            <CondicionalComIf numero={10} />
        </Card>

        <Card titulo="#05 - Condicional v1" color="#E94C6F">
            <Condicional numero={11} />
        </Card>

        <Card titulo="#04 - Repetição" color="#008BBA">
            <Repeticao />
        </Card>

        <Card titulo="#03 - Componente com Filhos" color="#D96459">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente Com Parametros" color="#FF85CB">
            <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
        </Card>


        <Card titulo="#01 - Primeiro Componente" color="#92B0CA">
            <Primeiro />
        </Card>

    </div>;