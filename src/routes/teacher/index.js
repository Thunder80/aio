import getTeachers from "./get";

const TeacherRouter = Router();

TeacherRouter.get("/", getTeachers);

export default TeacherRouter;