1. Create a Service Account in Firebase:

Go to your Firebase project in the Firebase console.

Navigate to Settings > Service accounts .

Click Create service account .

Give your service account a descriptive name (e.g., github-actions-deploy ).

Under Role , select Firebase Admin . This grants the service account full access to your Firebase project.

Click Create .

Download the JSON key file for your service account. This file contains the credentials you'll need to use in your GitHub Actions workflow.

2. Securely Store the Service Account Key:

Do not commit the JSON key file directly to your repository! This would expose your credentials publicly.

Instead, use a secure method to store the key:

GitHub Secrets: The recommended approach is to store the JSON key file as a secret in your GitHub repository.

Go to your repository's settings.

Click Secrets > Actions .

Click New repository secret .

Give your secret a name (e.g., FIREBASE_SERVICE_ACCOUNT ).

Paste the contents of the JSON key file into the secret value.

Environment Variables: You can also store the key as an environment variable in your GitHub Actions workflow, but this is less secure.

3. Update Your GitHub Actions Workflow:

In your GitHub Actions workflow file (usually .github/workflows/main.yml ), add the following steps:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          # ... other configuration options ...
firebaseServiceAccount : Replace FIREBASE_SERVICE_ACCOUNT with the name of the secret you created in step 2.

Other Configuration Options: Refer to the documentation for the FirebaseExtended/action-hosting-deploy@v0 action to see other configuration options you can use.

Example Workflow:

name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          projectId: your-firebase-project-id
          # ... other configuration options ...