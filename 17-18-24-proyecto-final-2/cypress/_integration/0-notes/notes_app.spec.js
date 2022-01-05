describe('Testeamos nuestra aplicación de notas', () => {
    it('Se renderiza correctamente', () => {
        cy
            .visit('/')
            .contains('Task List v2 - hosted on: Firebase');
    })
})