export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-uploads-501"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://87akctrc4b.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_EukDsAAHb",
    APP_CLIENT_ID: "6h94c8ma6mrrkjpavdr7kajmp4",
    IDENTITY_POOL_ID: "ap-southeast-1:7f0ca8a8-bb04-4226-a611-9a169595f796"
  }
};
