import * as services from "../services";

export const register = async (req, res) => {
  try {
    const response = await services.register();
    return res
      .set({
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "X-Powered-By": "Express",
      })
      .status(200)
      .json({ success: 0, data: response });
  } catch (error) {
    return res
      .set({
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "X-Powered-By": "Express",
      })
      .status(500)
      .json({
        error: -1,
        messages: "Internal Server Error",
      });
  }
};
