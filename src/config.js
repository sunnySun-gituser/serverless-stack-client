// export default {
//     s3: {
//       REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
//       BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
//     },
//     apiGateway: {
//       REGION: "YOUR_API_GATEWAY_REGION",
//       URL: "YOUR_API_GATEWAY_URL"
//     },
//     cognito: {
//       REGION: "YOUR_COGNITO_REGION",
//       USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
//       APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
//       IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
//     }
//   };
export default {
    s3: {
      REGION: "us-east-2",
      BUCKET: "sunny-sun-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://m6yqx0x5gc.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_J24DWBuAp",
      APP_CLIENT_ID: "56ofo2hh3os18tffv9qltvrufo",
      IDENTITY_POOL_ID: "us-east-2:159caf0b-61ef-4b3a-9257-f4983cd6f971"
    }
  };