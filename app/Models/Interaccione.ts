import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Vista from './Vista'

export default class Interaccione extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuario_id: number

  @column()
  public vista_id:number

  @column()
  public fecha: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Vista)
  public vista: HasOne<typeof Vista>
}
