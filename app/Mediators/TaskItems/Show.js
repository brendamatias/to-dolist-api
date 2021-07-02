/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const TaskItem = use('App/Models/TaskItem')

const Database = use('Database')

module.exports = async (id) =>
  Database.transaction(async (trx) => {
    const taskItem = await TaskItem.query().where({ id }).transacting(trx).first()

    return { status: 200, data: { data: taskItem } }
  })
