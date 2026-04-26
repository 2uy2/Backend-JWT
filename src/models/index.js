import User from "./User.js";
import Group from "./Group.js";
import Role from "./Role.js";
import Project from "./Project.js";
import Project_User from "./projectUser.js";
import Group_Role from "./groupRole.js";

// Tạo object chứa tất cả models
const db = {};

db.User = User;
db.Group = Group;
db.Role = Role;
db.Project = Project;
db.Project_User = Project_User;
db.Group_Role = Group_Role;

// 🔥 GỌI ASSOCIATE (QUAN TRỌNG NHẤT)
Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;