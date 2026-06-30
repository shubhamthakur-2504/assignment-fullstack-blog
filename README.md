# Blog & Authentication System

A full-stack web application featuring a sleek, responsive frontend powered by React and Vite, paired with a lightweight Express backend.

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16+ recommended)
* npm (comes bundled with Node.js)

### Running the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the server in development mode (runs on port `5000` with nodemon auto-reload):
   ```bash
   npm run dev
   ```

### Running the Frontend
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server (runs on `http://localhost:5173` or alternative port):
   ```bash
   npm run dev
   ```

---

## 🎨 Design Choices & Implementation Details

### 1. In-Memory Authentication Store
* **Approach**: User credentials created during signup are stored in-memory (in a local backend array) rather than inside a database.
* **Rationale**: This is chosen due to the **limited scope of the project**, allowing for quick, database-free testing and verification without requiring local database setups (like MongoDB or PostgreSQL).
* **Security**: Hashing is handled using **`bcryptjs`** on signup and validation checks are carried out securely prior to comparison.

### 2. Dynamic Blog Redirection
* **Approach**: The app incorporates dynamic routing where clicking on any blog preview redirects the user to a detailed blog view page (`/blog/:slug`).
* **Rationale**: Provides a seamless transition for visitors to access full blog posts with a formatted layout, enhancing content readability and structure.

### 3. Native JS Fetch API
* **Approach**: Direct HTTP communication between the React client and the Express server is implemented using the browser's native `fetch` API.
* **Rationale**: Eliminates the need for external packages like Axios, minimizing the bundle size and utilizing modern native JS standards.

### 4. Interactive & Premium UI/UX
* **Center-Aligned Layout**: Changed the full-page split login/signup template into a responsive, centered card container.
* **Resolution Guard Padding**: The low-resolution leaf image has a rounded frame and padding around it, preventing blurriness on wider screens.
* **Eye Toggles**: Fully interactive show/hide password buttons built with inline SVGs for all password and confirm password inputs.
* **General Error Alerts**: Dynamic backend validation messages (such as "Email is already registered" or "Invalid email or password") are displayed in a clean red alert container.
* **Visual Loading Feedback**: Simulates network latency (1-second delay middleware on the backend) to demonstrate the submit button disabling and spinner states.
