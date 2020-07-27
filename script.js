function verificacao() {
    let nome = document.getElementById('input-nome').value;
    let style1 = document.getElementById('input-nome')
    let dt_Nascimento = parseFloat(document.getElementById('input-dtnasc').value);
    let style2 = document.getElementById('input-dtnasc')
    let email = document.getElementById('input-email').value;
    let style3 = document.getElementById('input-email')
    let telefone = parseFloat(document.getElementById('input-tel').value);
    let style4 = document.getElementById('input-tel')

    try {
        if (nome == "") {
            var nome_erro = document.getElementById('erro_nome');
            nome_erro.style.display = "block"
            style1.style.borderColor = "red"
            setTimeout(() => { style1.style = "border: 2px solid rgba(0, 0, 0, 0.726);", nome_erro.style = "display:none;" }, 1000);
        } else {
            var ok_nome = document.getElementById('ok_nome');
            ok_nome.style.display = "block"
            style1.style.border = "3px solid green";
            setTimeout(() => { style1.style = "border: 2px solid rgba(0, 0, 0, 0.726);", ok_nome.style = "display:none;" }, 1000);
        }
        if (isNaN(dt_Nascimento)) {
            var dt_erro = document.getElementById('erro_dt')
            dt_erro.style.display = "block"
            document.getElementById('input-dtnasc').style.borderColor = "red"
            setTimeout(() => { style2.style = "border: 2px solid rgba(0, 0, 0, 0.726);", dt_erro.style = "display:none;" }, 1000);
        } else {
            var ok_nome = document.getElementById('ok_nome');
            ok_dt.style.display = "block"
            style2.style.border = "3px solid green";
            setTimeout(() => { style2.style = "border: 2px solid rgba(0, 0, 0, 0.726);", ok_dt.style = "display:none;" }, 1000);
        }
        if (email.length == 0) {
            var email_erro = document.getElementById('erro_email')
            email_erro.style.display = "block"
            style3.style.borderColor = "red"
            setTimeout(() => { style3.style = "border: 2px solid rgba(0, 0, 0, 0.726);", email_erro.style = "display:none;" }, 1000);
        } else {
            var ok_email = document.getElementById('ok_email');
            ok_email.style.display = "block"
            style3.style.border = "3px solid green";
            setTimeout(() => { style3.style = "border: 2px solid rgba(0, 0, 0, 0.726);", ok_email.style = "display:none;" }, 1000);
        }
        if (isNaN(telefone)) {
            var tel_erro = document.getElementById('erro_tel')
            tel_erro.style.display = "block"
            document.getElementById('input-tel').style.borderColor = "red"
            setTimeout(() => { style4.style = "border: 2px solid rgba(0, 0, 0, 0.726);", tel_erro.style = "display:none;" }, 1000);
        } else {
            var ok_tel = document.getElementById('ok_tel');
            ok_tel.style.display = "block"
            style4.style.border = "3px solid green";
            setTimeout(() => { style4.style = "border: 2px solid rgba(0, 0, 0, 0.726);", ok_tel.style = "display:none;" }, 1000);
        }
    } catch (error) {
        alert("Arruma ai");
    }
}