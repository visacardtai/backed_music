import { song, song_source, artist } from "../models";
export const getAllSong = () =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await song.findAll({
        include: {
          model: song_source,
          as: "song_source",
        },
      });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
