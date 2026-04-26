import {
  DataTypes,
  Model
} from "sequelize";
import sequelize from "../config/connectDB.js";


class User extends Model {
  static associate(models) {
    User.belongsToMany(models.Project, {
      through: models.Project_User,
      foreignKey: "userId",
      otherKey: "projectId"
    });

    User.belongsTo(models.Group, {
      foreignKey: "groupId"
    });

  }
}

User.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  username: DataTypes.STRING,
  address: DataTypes.STRING,
  sex: DataTypes.STRING,
  phone: DataTypes.STRING,

  groupId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Group",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT"
  }

}, {
  sequelize,
  modelName: "User",
  tableName: "User",
  timestamps: true
});



export default User;