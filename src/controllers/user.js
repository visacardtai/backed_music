import * as services from "../services";

export const getAllUser = async (req, res) => {
  try {
    const data = await services.getAllUser();
    return res.json({
      success: 0,
      messages: "Get Data Successfully !!!",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: -1,
      messages: "Internal Server Error",
    });
  }
};
