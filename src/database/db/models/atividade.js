const Sequelize = require("sequelize");
const sequelize = require("../../config/config").development;
const Usuario = require("./usuario");

const Atividade = sequelize.define("Atividade", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Usuario,
      key: "id",
    },
  },
});

Atividade.belongsTo(Usuario, { foreignKey: "usuario_id" });

module.exports = Atividade;
