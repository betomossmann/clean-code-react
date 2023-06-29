export class UnexpectedError extends Error {
  constructor () {
    super('Algo errado aconteceu, tente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
