const Notification = require("../Model/Notification");

const updateHallStatus = async (req, res) => {
    try {
        // Extract ID from request headers
        const id = req.headers['id'];

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({ message: "ID is required in headers" });
        }

        // Update hallStatus for the specified Notification
        const [updatedRows] = await Notification.update(
            { hallStatus: true },
            { where: { id } }
        );

        // Check if any rows were updated
        if (updatedRows === 0) {
            return res.status(404).json({ message: "Notification not found or already updated" });
        }

        res.status(200).json({ message: "Hall status updated successfully" });
    } catch (error) {
        console.error("Error updating hall status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {updateHallStatus};
