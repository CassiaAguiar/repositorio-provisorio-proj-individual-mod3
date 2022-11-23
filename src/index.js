const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')

const app = express()
app.use(express.json())
const romances = []


app.get('/romances', (request, response) => {
    return response.json(romances)
 })//visualizar => FUNCIONOU
 app.post('/romances', (request, response) => { //usando um install q add o id automaticamente
    const {nome, direcao, roteiro, elenco, classificacao, sinopse, ano} = request.body
    const romance = {id: uuid(), nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
    romances.push(romance)
    return response.status(201).json(romance)
 })//inserir => FUNCIONOU
 app.put('/romances/:id',(request, response) => { //vai usar o id para reconhecer onde vai ser mudado(no link adiciona /id)
    const { id } = request.params
    const { nome, direcao, roteiro, elenco, classificacao, sinopse, ano } = request.body
    const newRomances = {id, nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
    const romanceindex = romances.findIndex(romance => romance.id == id)
    romances[romanceindex] = newRomances;
    return response.json(newRomances)
 })//atualizar => FUNCIONOU
 app.delete('/alunos/:id',(request, response) => { //vai excluir tudo relacionado ao id
    const { id } = request.params
    const romanceindex = romances.findIndex(romance => romance.id == id)
    romances.splice(romanceindex, 1)
    return response.status(204).send()
 })//excluir => FUNCIONOU 

app.listen(8181, () =>{
   console.log('O servidor foi iniciado!')
})