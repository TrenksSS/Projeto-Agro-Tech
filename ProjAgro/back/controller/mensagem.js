const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let mensagens = await prisma.mensagens.create({
        data: req.body
    });

    res.status(200).json(mensagens).end();
}

const read = async (req, res) => {
    let mensagens = await prisma.mensagens.findMany();

    res.status(200).json(mensagens).end();
}

module.exports = {
    create,
    read
 }