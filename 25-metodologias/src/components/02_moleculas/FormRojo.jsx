import React from 'react'
import Button from "../01_atomos/Button"
import Container from "../01_atomos/Container"
import Input from "../01_atomos/Input"

const FormRojo = () => {
    return (
        <div>
            <Container>
                <Input />
                <Button color="red" />
            </Container>
        </div>
    )
}

export default FormRojo
