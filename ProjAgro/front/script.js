var list = document.querySelector("#b1")
console.log(localStorage)

function abrirmodal1() {
    let card = document.querySelector("#card1")
    card.style = "display:flex"
}
function fecharmodal1() {
    let card = document.querySelector("#card1")
    card.style = "display:none"
}

function abrirmodal2() {
    let card = document.querySelector("#card2")
    card.style = "display:flex"
}
function fecharmodal2() {
    let card = document.querySelector("#card2")
    card.style = "display:none"
}

function abrirmodal3() {
    let card = document.querySelector("#card3")
    card.style = "display:flex"
}
function fecharmodal3() {
    let card = document.querySelector("#card3")
    card.style = "display:none"
}


fetch("http://localhost:3000/veiculos")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach(todo => {
            let novoItem = document.querySelector(".vt").cloneNode(true);

            novoItem.classList.remove("model");

            novoItem.querySelector("#modvt").append(todo.modelo);
            novoItem.querySelector("#sta").append(todo.status);
            novoItem.querySelector("#est").append(todo.estado);
            

            list.appendChild(novoItem);
        });
    });

    let novoItem1 = document.querySelector(".momo").cloneNode(true);

            novoItem1.classList.remove("model");

            novoItem1.querySelector("#noUse").append(localStorage.usuario.nome);
            novoItem1.querySelector("#emUse").append(localStorage.usuario.email);
            // novoItem.querySelector("#est").append(todo.estado);
            

            list.appendChild(novoItem1);



    function cadcar(){
        let data = {}
    
        let body = {
            "modelo": document.querySelector("#modvei").value,
            "tipo": document.querySelector("#tipovei").value,
            "status": document.querySelector("#stavei").value,
            "estado": document.querySelector("#estvei").value,
            "ultimaManutencao": document.querySelector("#ultvei").value,
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body)
        if (body.modelo.length > 0 && body.tipo.length > 0 && body.status.length > 0 && body.estado.length > 0
            && body.ultimaManutencao.length > 0 && JSON.parse(localStorage.usuario).nivel == "adm") {
            fetch("http://localhost:3000/veiculo", options)
                .then(resp => resp.status)
                .then(data => {
                    if (data == 200) {
                        alert("Veiculo cadastrado ✔")
                        window.location.reload()
                    } else {
                        alert("Erro ao enviar ❗")
                    }
                })
                .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
        } else {
            alert("Você não tem permição para essa ação ❗")
        }
    }

    function caduse(){
        let data = {}
    
        let body = {
            "nome": document.querySelector("#nouse").value,
            "email": document.querySelector("#emuse").value,
            "senha": document.querySelector("#seuse").value,
            "nivel": document.querySelector("#niuse").value,
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body)
        if (body.nome.length > 0 && body.email.length > 0 && body.senha.length > 0 && body.nivel.length > 0
             && JSON.parse(localStorage.usuario).nivel == "adm") {
            fetch("http://localhost:3000/usuario", options)
                .then(resp => resp.status)
                .then(data => {
                    if (data == 200) {
                        alert("Usuario cadastrado ✔")
                        window.location.reload()
                    } else {
                        alert("Erro ao enviar ❗")
                    }
                })
                .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
        } else {
            alert("Você não tem permição para essa ação ❗")
        }
    }
