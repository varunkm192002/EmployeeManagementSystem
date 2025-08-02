import Department from "../models/Department.js";



const addDepartment = async (req, res) => {

    try {
        const { dep_name, description } = req.body;
        const newDep = new Department({
            //names are same here and in database therefore can write only once name instead of two
            dep_name,
            description
        })
        await newDep.save()
        return res.status(201).json({ success: true, department: newDep });

    } catch (error) {
        return res.status(500).json({ success: false, error: "add department server error" })

    }

}


export { addDepartment };