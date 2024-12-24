import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    if (age < 18) {
        return res.status(400).json({ error: 'A idade mínima para criar uma conta é 18 anos' });
    }

    try {
        const user = await prisma.user.create({
            data: { name, email, age },
        });
        res.status(201).json({ message: 'Usuário criado com sucesso!', user });

    } catch (error) {
        console.error(error); // Log do erro
        res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
    }
});

app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }

    })
    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})

    
app.listen(3000)
