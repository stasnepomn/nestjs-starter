export default () => ({
  port: parseInt(process.env.PORT, 10),
  mongo: {
    uri: process.env.MONGO_URI,
  },
});
