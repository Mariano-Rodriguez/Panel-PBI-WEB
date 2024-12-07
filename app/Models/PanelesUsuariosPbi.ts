import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import PanelesPbi from './PanelesPbi'
import Usuario from './Usuario'

export default class PanelesUsuariosPbi extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public paneles_pbis_id: number

  @column()
  public usuario_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => PanelesPbi, {
    foreignKey: 'paneles_pbis_id'
  })
  public panel: BelongsTo<typeof PanelesPbi>

  @belongsTo(() => Usuario, {
    foreignKey: 'usuario_id'
  })
  public usuario: BelongsTo<typeof Usuario>
}
