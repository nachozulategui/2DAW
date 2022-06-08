console.log('Hola nacho, cómo estamos?');
console.log('hola profesor como andas');
const { response } = require('express');
const express = require('express')
const app = express()
const port = 3001

let notes = [
  {
  id: 1,
  content: 'madness',
  date:'20-1-2021',
  important: true,
},
{
  id: 2,
  content: 'hola fred',
  date:'20-1-2023',
  important: true,
},
{
  id: 3,
  content: 'hello mundo',
  date:'20-1-2000',
  important: false,
},{
  id: 4,
  content: 'holiwi',
  date:'20-1-2001',
  important: true,
}
]

app.get('/', (req, res) => {
  res.send('Hello world nacho!')
})

app.get('/api/notes', (req, res) => {
  res.send(JSON.stringify(notes ,null,2))
})

app.get('/api/notes/:id', (req, res) => {
 const id = req.params.id
 console.log(id)
 const note = notes.find(note => note.id == id)  
 console.log({note})

  res.json(note )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
