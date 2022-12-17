import { getDocs, collection } from "firebase/firestore"; 

const getStudents = async (req, res) => {
    const students = await getDocs(collection(db, "student"));
    res.json({ students });
}

export default getStudents;