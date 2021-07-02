/* eslint-disable camelcase */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const TaskItem = use('App/Models/TaskItem')

const Database = use('Database')

module.exports = async (id, { finished }) =>
  Database.transaction(async (trx) => {
    const taskItem = await TaskItem.query().where({ id }).transacting(trx).first()

    taskItem.merge({ finished })
    await taskItem.save(trx)

    return { status: 200, data: { data: taskItem } }
  })
