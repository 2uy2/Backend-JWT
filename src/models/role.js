import {
    DataTypes,
    Model
} from "sequelize";

import sequelize from "../config/connectDB.js"; // nhớ export sequelize

class Role extends Model {
    static associate(models) {
        Role.belongsToMany(models.Group, {
            through: models.Group_Role,
            foreignKey: "roleId",
            otherKey: "groupId"
        });
    }
}

Role.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING,


}, {
    sequelize,
    modelName: "Role",
    tableName: "Role",
    timestamps: true
});


export default Role;