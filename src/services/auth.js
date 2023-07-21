export const register = () =>
  new Promise((resolve, reject) => {
    try {
      resolve("Register Successfuly");
    } catch (error) {
      reject(error);
    }
  });
