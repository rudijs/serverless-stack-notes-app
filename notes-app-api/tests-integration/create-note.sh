#!/bin/bash

npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id=$YOUR_COGNITO_USER_POOL_ID \
--app-client-id=$YOUR_COGNITO_APP_CLIENT_ID \
--cognito-region=$YOUR_COGNITO_REGION \
--identity-pool-id=$YOUR_IDENTITY_POOL_ID \
--invoke-url=$YOUR_API_GATEWAY_URL \
--api-gateway-region=$YOUR_API_GATEWAY_REGION \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'
