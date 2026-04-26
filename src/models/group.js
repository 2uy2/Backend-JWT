import {
    DataTypes,
    Model
} from "sequelize";
import sequelize from "../config/connectDB.js"; // nhớ export sequelize

class Group extends Model {
    static associate(models) {
        Group.belongsToMany(models.Role, {
            through: models.Group_Role,
            foreignKey: "groupId",
            otherKey: "roleId"
        });
        Group.hasMany(models.User, {
            foreignKey: "groupId"
        });
    }

}

Group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,


}, {
    sequelize,
    modelName: "Group",
    tableName: "Group",
    timestamps: true
});



export default Group;