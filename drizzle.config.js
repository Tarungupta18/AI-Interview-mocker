/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:y8kMtz5vYRli@ep-red-band-a1p9az4l.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };
  