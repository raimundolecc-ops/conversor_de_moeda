async function converter() {
        const valor = parseFloat(document.getElementById("valor").value);
        const de = document.getElementById("moedaDe").value;
        const para = document.getElementById("moedaPara").value;

        if (!valor) {
            document.getElementById("resultado").innerText = "Digite um valor válido.";
            return;
        }

        try {
            const res = await fetch(`https://api.exchangerate.host/convert?access_key=1272ba89f0c23bcdf89111d2792ec7e9&from=${de}&to=${para}&amount=${valor}`);
            const data = await res.json();

            if (!data.success || typeof data.result !== "number") {
                const mensagem = data.error?.info || "Erro ao converter.";
                document.getElementById("resultado").innerText = mensagem;
                return;
            }

            document.getElementById("resultado").innerText = 
                `${valor} ${de} = ${data.result.toFixed(2)} ${para}`;
        } catch (error) {
            document.getElementById("resultado").innerText = "Erro ao converter.";
        }
    }

    function transferir() {
        const conta = document.getElementById("contaDestino").value;
        const valor = parseFloat(document.getElementById("valorTransferencia").value);

        if (!conta || !valor) {
            document.getElementById("mensagemTransferencia").innerText = "Preencha todos os campos.";
            return;
        }

        document.getElementById("mensagemTransferencia").innerText = "Transferência realizada com sucesso!";
    }