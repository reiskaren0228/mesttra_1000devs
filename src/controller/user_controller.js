const calcularIdade = (req, res) => {
    const hoje = new Date(Date.now());
    const nascimento = new Date("1987-11-20");
    const idade = hoje.getFullYear() - nascimento.getFullYear();   
    
    res.json({
          "nome": "Karen",
          "cidade": "Paulista/PE",
          "profissao": "Desenvolvedora Web",
          "nascimento": idade
        });
      };

      module.exports = {calcularIdade};