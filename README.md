# serverless-stack-notes-app

Demo from https://serverless-stack.com

```
aws cognito-idp sign-up \
 --region ap-southeast-1 \
 --client-id <CLIENT_ID> \
 --username admin@example.com \
 --password Passw0rd!
```

```
aws cognito-idp admin-confirm-sign-up \
 --region ap-southeast-1 \
 --user-pool-id <USER_POOL_ID> \
 --username admin@example.com
```
