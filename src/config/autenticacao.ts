export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  refreshToken: {
    segredo: process.env.REFRESH_SECRET,
    expiraEm: process.env.REFRESH_EXPIRES_IN,
    duracao: Number(process.env.REFRESH_DURATION),
  },
}
