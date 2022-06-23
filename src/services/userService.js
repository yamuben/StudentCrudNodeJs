import Student from "../models/student";

class UserServices {
  //register student
    static async registerStudent(req) {
    const newStudent = await Student.create(req.body);

    return newStudent;
  }

// get all students
static async getAllStudent(){
    const allStudent = await Student.find();
    return allStudent;
}


}

export default UserServices;
