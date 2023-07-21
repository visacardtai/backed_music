import { playlist } from "../models";

export const getAllPlaylist = async (req, res) => {
  const playlists = await playlist.findAll();
  res.json({ status: "success", data: playlists });
};
