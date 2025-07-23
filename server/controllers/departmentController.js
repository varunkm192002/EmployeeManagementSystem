


const addDepartment = (req, res) => {

    try {

    } catch (error) {
        return res.status(500).json({ success: false, error: "add department server error" })

    }

}


export { addDepartment };