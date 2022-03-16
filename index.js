class Pessoa{
 constructor( nome ,data_de_nascimento, altura, ano_atual ){
    this.nome = nome;
    this.data_de_nascimento = data_de_nascimento;
    this.altura = altura ;
    this.ano_atual = ano_atual;
 }

  calcularIdade() {
    return 2006 - this.ano_atual
  }
  
  idade(){
    return this.calcularIdade()
  }
  mostrarDados() {
    console.log(this.nome)    
    console.log(this.data_de_nascimento)    
    console.log(this.altura)
    console.log(this.ano_atual)
  }
}

let humaninho = new Pessoa("semcriatividade","27/04/2006","1.67", "2022")
  console.log(humaninho.idade())

humaninho.mostrarDados()




