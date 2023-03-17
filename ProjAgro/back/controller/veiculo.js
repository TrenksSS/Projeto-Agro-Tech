const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let veiculo = await prisma.veiculo.create({
        data: req.body
    });

    res.status(200).json(veiculo).end();
}

const read = async (req, res) => {
    let veiculo = await prisma.veiculo.findMany();

    res.status(200).json(veiculo).end();
}

module.exports = {
    create,
    read
 }