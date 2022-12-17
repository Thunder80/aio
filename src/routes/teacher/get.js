import { getDocs, collection } from "firebase/firestore"; 

const getTeachers = async (req, res) => {
    const teachers = await getDocs(collection(db, "teacher"));
    res.json({teachers});
}

export default getTeachers;