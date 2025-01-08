
# CI-CD Pipeline with Vercel and Node.js

This project demonstrates how to set up a simple **Node.js** application with **Express**, build and test it using **GitHub Actions**, and deploy it to **Vercel**. The application includes a simple API with routes to display a "Hello World" message and perform addition.


## Features

1. **API Endpoints**:
   - `/`: Returns a "Hello World!" message.
   - `/add/:a/:b`: Adds two numbers `a` and `b` and returns their sum.

2. **Continuous Integration and Deployment (CI/CD)**:
   - **GitHub Actions** is used for:
     - Running tests with Jest.
     - Deploying the application to Vercel on every push or pull request to the `main` branch.

3. **Deployed on Vercel**:
   - [Live Application](https://ci-cd-pipeline-intro.vercel.app/)


## API Endpoints

### 1. `GET /`
**Description**: Returns a "Hello World!" message with the application version.  
**Response**:
```json
{
  "msg": "Hello World!",
  "app_version": "1"
}
```

### 2. `GET /add/:a/:b`
**Description**: Adds two numbers `a` and `b` and returns the result.  
**Parameters**:
- `a`: The first number (required).
- `b`: The second number (required).

**Example**:  
`GET /add/3/5`

**Response**:
```json
{
  "sum": 8
}
```

## Local Development

### Prerequisites
- **Node.js**: Ensure Node.js (version 18.x or later) is installed.
- **npm**: Comes bundled with Node.js.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/thabir303/CI-CD-Pipeline.git
   cd CI-CD-Pipeline
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   node index.js
   ```
   The app will run at `http://localhost:3000`.

### Testing Locally
Run tests with Jest:
```bash
npm test
```


## Built With

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **Jest**: JavaScript testing framework.
- **GitHub Actions**: For CI/CD.
- **Vercel**: Serverless deployment platform.
