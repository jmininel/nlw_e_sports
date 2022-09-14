import express from 'express';
import { PrismaClient } from "@prisma/client"
 
const app = express()
const prisma = new PrismaClient()

//listagem de games com contagem de anuncio
app.get('/games', (req, res) => {
    return res.json([]);
});

//Criação de novo anúncio
app.post('/ads', (req, res) => {
    return res.status(201).json([1,2]);
});

// Listagem de anúncios por game
app.get('/games/:id/ads', (req, res) => {
    return res.json([
        {id: 1, name: 'Anuncio 1' },
        {id: 2, name: 'Anuncio 2' },
        {id: 3, name: 'Anuncio 3' },
        {id: 4, name: 'Anuncio 3' },
        {id: 7, name: 'Anuncio 3' },
    ])
})

// Buscar Discord pelo ID do anúncio
app.get('/ads/:id/discord', (req, res) => {
    return res.json([])
})

app.listen(3333);