import {
    DataTypes,
    Model
} from "sequelize";
import sequelize from "../config/connectDB.js"; // nhớ export sequelize

class Project extends Model {
    static associate(models) {
        Project.belongsToMany(models.User, {
            through: models.Project_User,
            foreignKey: "projectId",
            otherKey: "userId"
        });

        

    }
}

Project.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.STRING,
    customerId: DataTypes.INTEGER,



}, {
    sequelize,
    modelName: "Project",
    tableName: "Project",
    timestamps: true
});

export default Project;