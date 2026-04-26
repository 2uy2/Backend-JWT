import {
    DataTypes,
    Model
} from "sequelize";
import sequelize from "../config/connectDB.js";

class Group_Role extends Model {}

Group_Role.init({
    groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Group",
            key: "id"
        },
        onDelete: "CASCADE"
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Role",
            key: "id"
        },
        onDelete: "CASCADE"
    }
}, {
    sequelize,
    modelName: "Group_Role",
    tableName: "Group_Role",
    timestamps: false
});

export default Group_Role;