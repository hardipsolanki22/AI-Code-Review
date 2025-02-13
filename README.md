# Code Debugging Tool with AI Assistance

This project provides a simple interface for users to write code, submit it, and receive AI-powered debugging assistance.  The AI will analyze the code, attempt to identify and fix bugs, provide the corrected code, and offer suggestions for improvement.

*   **Corrected Code Display:** The corrected code, along with any changes made by the AI, is displayed to the user.
*   **Suggestions:** The AI provides suggestions for improving the code's performance, readability, or security.
*   **Language Support:**  Python, JavaScript, Java, C++, etc.

## Technologies Used

*   **Frontend:** React
*   **Backend:** Node.js (Express)
*   **AI Model:** Google Gemini 2.0 Flash

## Installation

1.  Clone the repository:
  ```bash
   git clone https://github.com/hardipsolanki22/AICodeReview.git
   cd AICodeReview
    ```

2.  Install frontend dependencies:

    ```bash
    cd Client
    npm install  # or yarn install
    ```

3.  Install backend dependencies:

    ```bash
    cd API
    npm install # or yarn install
    ```

4.  Configure the AI API key:

    *   Create a `.env` file in the backend directory.
    *   Add your AI API key:

        ```
        AI_API_KEY=your_actual_api_key
        ```

5.  Run the frontend development server:

    ```bash
    cd Client
    npm start # or yarn start
    ```

6.  Run the backend server:

    ```bash
    cd API
    npm dev # or yarn start
    ```

## Usage

1.  Open the application in your browser .
2.  Write your code in the code editor.
3.  Click the "Submit" button.
4.  The AI will process your code, and the corrected code and suggestions will be displayed below the editor.

## Contributing

Contributions are welcome!  Please open an issue or submit a pull request.

## License

This Project license under Shreyan Coding School
