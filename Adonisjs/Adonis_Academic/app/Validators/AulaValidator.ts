import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AulaValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    
    data: schema.date.nullableAndOptional({}, []),
    
    conteudo: schema.string.nullableAndOptional([
      rules.unique({
        table: 'aulas',
        column: 'conteudo'
      }),
      rules.minLength(3),
      rules.maxLength(80),
      rules.alpha()
    ]),

    turmaId: schema.number.nullableAndOptional([
      rules.unsigned()
    ])

  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'data.date.format': 'Escreva a data no formato "yyyy-mm-dd"',
    'turma_id.number': 'Escreva a duracao em numeros',
    'conteudo.unique': 'Esse conteudo ja esta cadastrado',
    'conteudo.string': 'O conteudo não pode se numerico'
  }
}
