const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')

const app = express()
app.use(express.json())
const romances = []
const musicais = []
const suspenses = []
const fantasias = []


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
 app.delete('/romances/:id',(request, response) => { //vai excluir tudo relacionado ao id
    const { id } = request.params
    const romanceindex = romances.findIndex(romance => romance.id == id)
    romances.splice(romanceindex, 1)
    return response.status(204).send()
 })//excluir => FUNCIONOU

 //--------------------------------------------------------------------------------------------------------------------------------

app.get('/musicais', (request, response) => {
    return response.json(musicais)
 })//visualizar => FUNCIONOU
 app.post('/musicais', (request, response) => { //usando um install q add o id automaticamente
    const {nome, direcao, roteiro, elenco, classificacao, sinopse, ano} = request.body
    const romance = {id: uuid(), nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
    romances.push(musical)
    return response.status(201).json(musical)
 })//inserir => FUNCIONOU
 app.put('/musicais/:id',(request, response) => { //vai usar o id para reconhecer onde vai ser mudado(no link adiciona /id)
    const { id } = request.params
    const { nome, direcao, roteiro, elenco, classificacao, sinopse, ano } = request.body
    const newMusicais = {id, nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
    const musicalindex = musicais.findIndex(musical => musical.id == id)
    musicais[musicalindex] = newMusicais;
    return response.json(newMusicais)
 })//atualizar => FUNCIONOU
 app.delete('/musicais/:id',(request, response) => { //vai excluir tudo relacionado ao id
    const { id } = request.params
    const musicalindex = musicais.findIndex(musical => musical.id == id)
    musicais.splice(musicalindex, 1)
    return response.status(204).send()
 })//excluir => FUNCIONOU

 //--------------------------------------------------------------------------------------------------------------------------------

 app.get('/suspenses', (request, response) => {
   return response.json(suspenses)
})//visualizar => FUNCIONOU
app.post('/suspenses', (request, response) => { //usando um install q add o id automaticamente
   const {nome, direcao, roteiro, elenco, classificacao, sinopse, ano} = request.body
   const suspense = {id: uuid(), nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
   suspenses.push(suspense)
   return response.status(201).json(suspense)
})//inserir => FUNCIONOU
app.put('/suspenses/:id',(request, response) => { //vai usar o id para reconhecer onde vai ser mudado(no link adiciona /id)
   const { id } = request.params
   const { nome, direcao, roteiro, elenco, classificacao, sinopse, ano } = request.body
   const newSuspenses = {id, nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
   const suspenseindex = suspenses.findIndex(suspense => suspense.id == id)
   suspenses[suspenseindex] = newSuspenses;
   return response.json(newSuspenses)
})//atualizar => FUNCIONOU
app.delete('/suspenses/:id',(request, response) => { //vai excluir tudo relacionado ao id
   const { id } = request.params
   const suspenseindex = suspenses.findIndex(suspense => suspense.id == id)
   suspenses.splice(suspenseindex, 1)
   return response.status(204).send()
})//excluir => FUNCIONOU

//---------------------------------------------------------------------------------------------------------------------------------

app.get('/fantasias', (request, response) => {
   return response.json(fantasias)
})//visualizar => FUNCIONOU
app.post('/fantasias', (request, response) => { //usando um install q add o id automaticamente
   const {nome, direcao, roteiro, elenco, classificacao, sinopse, ano} = request.body
   const fantasia = {id: uuid(), nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
   fantasias.push(fantasia)
   return response.status(201).json(fantasia)
})//inserir => FUNCIONOU
app.put('/fantasias/:id',(request, response) => { //vai usar o id para reconhecer onde vai ser mudado(no link adiciona /id)
   const { id } = request.params
   const { nome, direcao, roteiro, elenco, classificacao, sinopse, ano } = request.body
   const newFantasias = {id, nome, direcao, roteiro, elenco, classificacao, sinopse, ano}
   const fantasiaindex = fantasias.findIndex(fantasia => fantasia.id == id)
   fantasias[fantasiaindex] = newFantasias;
   return response.json(newFantasias)
})//atualizar => FUNCIONOU
app.delete('/fantasias/:id',(request, response) => { //vai excluir tudo relacionado ao id
   const { id } = request.params
   const fantasiaindex = fantasias.findIndex(fantasia => fantasia.id == id)
   fantasias.splice(fantasiaindex, 1)
   return response.status(204).send()
})//excluir => FUNCIONOU


app.listen(8181, () =>{
   console.log('O servidor foi iniciado!')
})
