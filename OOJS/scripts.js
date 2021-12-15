class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor){
      if(this._saldo >= valor)
        this._saldo -= valor;
      else
        return "Operacao Negada";
        
      return this._saldo;
  }

  depositar(valor){
      this._saldo += valor;
      
      return this._saldo;
  }
}


class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, limiteCredito){
        super(agencia,numero);
        this.tipo = "Corrente";
        this._limiteCredito = limiteCredito;
    }
    
    get limiteCredito(){
        return this._limiteCredito;
    }

    set limiteCredito(valor){
        this._limiteCredito += valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = "Poupanca";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = "Universitaria";
    }

    sacar(valor){
        if(this._saldo >= valor && valor <= 500)
            this._saldo -= valor;
        else
            return "Operacao Negada."

        return this._saldo;
    }
}