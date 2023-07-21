import { user, account, song, song_source, artist } from "./index";

// Relationship Table user and account
// One-To-One
user.hasOne(account, { foreignKey: "id_user" });
account.belongsTo(user, { foreignKey: "id_user" });

// Relationship Table song and song_source
// One-To-One
artist.hasOne(song, { foreignKey: "id_artists" });
song.belongsTo(artist, { foreignKey: "id_artists" });

song_source.hasOne(song, { foreignKey: "id_source" });
song.belongsTo(song_source, { foreignKey: "id_source" });

// Relationship Table song and artists
// One-To-One
