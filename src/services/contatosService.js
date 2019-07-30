export const ContatosService = {
    listar() {
        return fetch('http://localhost:3300/wscontatos')
            .then(response => response.json());
    },
    remover(id) {
        return fetch('http://localhost:3300/wscontatos/' + id, {
            method: 'DELETE'
        })
            .then(response => response.json());
    },
    adicionar(contato) {
        return fetch('http://localhost:3300/wscontatos', {
            method: 'POST',
            body: JSON.stringify(contato),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json());
    }
}