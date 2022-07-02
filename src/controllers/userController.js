import UserServices from "../services/userService";

class UserController {
  
  //register user contoroller
  
  static async registerUser(req, res) {
    const newUser = await UserServices.registerStudent(req);

    if (!newUser) {
      return res.status(400).json({ error: "failed to register" });
    }

    return res.status(200).json({ message: "successfully", data: newUser });
  }
  //get all user contoroller

  static async getAllUsers(req, res) {
    const allStudents = await UserServices.getAllStudent();

    if (!allStudents) {
      return res.status(400).json({ error: "failed to get all" });
    }

    return res.status(200).json({ message: "successfully", data: allStudents });
  }
}

export default UserController;
