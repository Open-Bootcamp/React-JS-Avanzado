import React from 'react'
import Button from '../components/01_atomos/Button'
import Input from '../components/01_atomos/Input'
import Container from '../components/01_atomos/Container'
import FormAzul from '../components/02_moleculas/FormAzul'
import FormRojo from '../components/02_moleculas/FormRojo'
import Formulario from '../components/03_organismos/Formulario'
import Header from '../components/02_moleculas/Header'
import OrgHeader from '../components/03_organismos/OrgHeader'

const AtomicDesign = () => {
    return (
        <div>
            <h2>Vamos a diseñar nuestros átomos</h2>
            <h3>Átomos</h3>
            <div>
                <Button color="blue" />
                <Button color="red" />
                <Input />
                <Container />
            </div>
            <h3>Moléculas</h3>
            <div>
                <FormAzul />
                <FormRojo />
                <Header />
            </div>
            <h3>Organismos</h3>
            <div>
                <Formulario />
                <OrgHeader />
            </div>
            <h3>Plantillas</h3>
            <div>
                <Formulario />
            </div>
            <h3>Páginas</h3>
            <div>
                <Formulario />
            </div>
        </div>
    )
}

export default AtomicDesign
