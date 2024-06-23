//Cálculo de Folha De Pagamento
const valorDaHora = 22;
const horasTrabalhadas = valorDaHora * 220;
const valorBruto = horasTrabalhadas;

if (valorBruto>600 &&valorBruto <= 2112) {
  const inss = 0.09;
  const fgts = 0.08;
  const salariocominss = horasTrabalhadas * inss;
  const inssSalario = salariocominss * inss;
  const valorfgts = fgts * valorBruto;
  const TotalDeImposto = inssSalario + valorfgts;
  console.log(`
        Seu Salario Bruto é $${valorBruto.toFixed()} Esta Isento Do IRRF. 
        INSS: 9% $${inssSalario.toFixed()}
        FGTS: 8% $${valorfgts.toFixed()}
        Total De Descontos: $${TotalDeImposto.toFixed()}
        Salario Liquido: $${valorBruto - TotalDeImposto.toFixed()}
        `);
}
if (valorBruto > 2112 && valorBruto <= 2826) {
  const ir1 = 0.075;
  const inss = 0.09;
  const fgts = 0.08;
  const salariocomir = horasTrabalhadas * ir1.toFixed(2);
  const inssSalario = salariocomir * inss.toFixed(2);
  const valorir = valorBruto - salariocomir.toFixed(2);
  const valorfgts = fgts * valorir.toFixed(2);
  const TotalDeImposto = salariocomir + inssSalario + valorfgts;

  console.log(
    `
                      Salario Bruto: $${valorBruto.toFixed()}
                      Imposto De IR: 7.50% $${salariocomir.toFixed()} 
                      INSS: 9% $${inssSalario.toFixed() - inss.toFixed()}
                      FGTS: 8% $${valorfgts.toFixed()}
                      Total De Descontos: $${TotalDeImposto.toFixed()}
                      Salario Liquido: $${valorBruto - TotalDeImposto}
      
                      `
  );
}
if (valorBruto > 2826 && valorBruto <= 3751) {
  const ir1 = 0.15;
  const inss = 0.12;
  const fgts = 0.08;
  const salariocomir = horasTrabalhadas * ir1.toFixed(2);
  const inssSalario = salariocomir * inss.toFixed(2);
  const valorir = valorBruto - salariocomir.toFixed(2);
  const valorfgts = fgts * valorir.toFixed(2);
  const TotalDeImposto = salariocomir + inssSalario + valorfgts;

  console.log(
    `
                      Salario Bruto: $${valorBruto.toFixed()}
                      Imposto De IR: 15% $${salariocomir.toFixed()} 
                      INSS: 12% $${inssSalario.toFixed() - inss.toFixed()}
                      FGTS: 8% $${valorfgts.toFixed()}
                      Total De Descontos: $${TotalDeImposto.toFixed()}
                      Salario Liquido: $${valorBruto - TotalDeImposto}
      
                      `
  );
}
if (valorBruto >= 3751 && valorBruto >= 4664) {
  const ir1 = 0.22;
  const inss = 0.14;
  const fgts = 0.08;
  const salariocomir = horasTrabalhadas * ir1.toFixed(2);
  const inssSalario = salariocomir * inss.toFixed(2);
  const valorir = valorBruto - salariocomir.toFixed(2);
  const valorfgts = fgts * valorir.toFixed(2);
  const TotalDeImposto = salariocomir + inssSalario + valorfgts;

  console.log(
    `
                Salario Bruto: $${valorBruto.toFixed()}
                Imposto De IR: 22% $${salariocomir.toFixed()} 
                INSS: 14% $${inssSalario.toFixed() - inss.toFixed()}
                FGTS: 8% $${valorfgts.toFixed()}
                Total De Descontos: $${TotalDeImposto.toFixed()}
                Salario Liquido: $${valorBruto - TotalDeImposto}

                `
  );
}
