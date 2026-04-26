import {
    DataTypes,
    Model
} from "sequelize";
import sequelize from "../config/connectDB.js"; // nhớ export sequelize
import Project from "./project.js";
import User from "./user.js";
class Project_User extends Model {

}

Project_User.init({

    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Project",
            key: "id"
        },
        onDelete: "CASCADE"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "User",
            key: "id"
        },
        onDelete: "CASCADE"
    }

}, {
    sequelize,
    modelName: "Project_User",
    tableName: "Project_User",
    timestamps: true
});

export default Project_User;