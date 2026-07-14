export class Cliente {
  #nome
  #hora
  #email

  constructor(nome, hora, email) {
    this.#nome = nome
    this.#hora = hora
    this.#email = email
  }

  get nome() {
    return this.#nome
  }

  get hora() {
    return this.#hora
  }

  get email() {
    return this.#email
  }

  toJSON() {
    return {
      client: this.nome,
      hour: this.hora,
      email: this.email,
    }
  }

  static fromApi(data) {
    return new Cliente(data.client, data.hour, data.email)
  }
}
