import { user } from "../models";
export const getAllUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await user.findAll();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
