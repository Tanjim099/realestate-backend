import Visitor from "../models/visitorModel.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getVisitor = async (req, res, next) => {
    const { page, latitude, longitude } = req.body;
    try {
        const newVisitors = new Visitor({
            page,
            location: {
                longitude,
                latitude,
            }
        });
        await newVisitors.save();
        res.status(201).json(
            new ApiResponse(200, newVisitors, "Fetched Successfully")
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}