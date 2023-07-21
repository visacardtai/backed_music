import { user, account, song, artist } from "../models";

export const getAllAccount = async (req, res) => {
  // const data = await account.findAll({
  //   include: {
  //     model: user,
  //     as: "user",
  //   },
  // });
  const data = await song.findAll({
    include: {
      model: artist,
      as: "artist",
    },
  });
  res.json({ success: 0, data: data });
};
