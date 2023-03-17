const { PrismaClient } = require('@prisma/client');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

const create = async (req, res) => {
  bcrypt.genSalt(10, function(err, salt) {
    if (err == null) {
      bcrypt.hash(req.body.senha, salt, async function(errCrypto, hash) {
        if(errCrypto == null){
            req.body.senha = hash
          
            const usuario = await prisma.usuario.create({
                data: req.body
            })

            res.status(200).json(usuario).end()
        } else {
          res.status(500).json(errCrypto).end()
        }
      });
    } else {
      res.status(500).json(err).end()
    }
  })
}
const read = async (req, res) => {
    let usuario = await prisma.usuario.findMany();

    res.status(200).json(usuario).end();
}

  const login = async(req, res) => {
    const usuario = await prisma.usuario.findFirstOrThrow({
      where: {
        email: req.body.email
      }
    }).then((value) => {return(value)})
    .catch((err) => {return {"erro": "Usuário invalido", "validation": false}})
    if (usuario.erro == null) {
      bcrypt.compare(req.body.senha, usuario.senha).then((value) => {
        if (value) {
          let data = {"uid": usuario.id, "role": usuario.nivel}
          jwt.sign(data, process.env.KEY, {expiresIn: '1h'}, function(err2, token) {
            if(err2 == null){
                res.status(200).json({"token": token, "uid": usuario.id, "uname": usuario.nome, "nivel": usuario.nivel, "validation": true}).end()
            } else {
                res.status(500).json(err2).end()
            }
          })  
        } else {
          res.status(404).json({"erro": "Senha inválida", "validation": false}).end()
        }
      })
    } else {
      res.status(404).json(usuario).end()
    }
  }



module.exports = {
    create,
    read,
    login
 }