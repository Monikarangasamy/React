# React Quiz Application

This is a simple and interactive quiz application built with React. It allows users to test their knowledge on a series of questions, tracks their score, and provides a final result.

-----

## Features

  - **Interactive Quiz:** Users can answer a series of multiple-choice questions.
  - **Score Tracking:** The application keeps track of the user's score as they answer questions.
  - **Responsive UI:** The application is styled to be visually appealing and responsive.
  - **Restart Option:** Users can restart the quiz at any time after completion.
  - **Progress Indicator:** The app shows the user which question they're on (e.g., "1 of 10 questions").

-----

<img width="1912" height="903" alt="image" src="https://github.com/user-attachments/assets/b19e7293-e1c2-4d5c-9c5f-d9af8c953fd4" />

<img width="1918" height="916" alt="image" src="https://github.com/user-attachments/assets/4166f970-84e8-4e2d-af6d-960a37d21f34" />

<img width="1912" height="911" alt="image" src="https://github.com/user-attachments/assets/604bbe8d-a790-4deb-9ec9-87be3b82272f" />

<img width="1908" height="916" alt="image" src="https://github.com/user-attachments/assets/e9961336-260d-4685-892c-234292fc7802" />

<img width="1912" height="912" alt="image" src="https://github.com/user-attachments/assets/3d966aec-d1e0-4416-87b8-37afd83763ad" />



## Installation

To get a copy of this project up and running on your local machine, follow these simple steps.

### Prerequisites

You need to have **Node.js** and **npm** installed on your computer.

### Steps

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd quiz
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

The application will now be running on `http://localhost:3000`.

-----

## Usage

Once the application is running, you can follow these steps to use the quiz:

1.  Click the **"Start"** button on the welcome screen.
2.  Read the question and select one of the available options.
3.  The selected option will be highlighted.
4.  Click the **"Next"** button to proceed to the next question.
5.  After answering all questions, you will see your final score.
6.  Click the **"Restart"** button to start a new quiz.

-----

## Project Structure

The project follows a standard React application structure, with components and data separated for better organization and maintainability.

```
.
├── package.json
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── Option.jsx
│   │   ├── Quiz.jsx
│   │   ├── Result.jsx
│   │   └── Start.jsx
│   ├── constants
│   │   └── constant.js
│   ├── data
│   │   └── questions.js
│   └── index.js
└── ...
```

  - `src/App.jsx`: The main component that manages the quiz stages.
  - `src/components/`: Contains all reusable React components like `Start`, `Quiz`, `Result`, and `Option`.
  - `src/constants/constant.js`: Defines the different states of the quiz (e.g., `START`, `IN_PROGRESS`, `ENDED`).
  - `src/data/questions.js`: A separate module containing the quiz questions and answers, making it easy to add or modify content.

-----


## Dependencies

The project relies on the following key dependencies, as defined in `package.json`:

  - **react**: `^19.1.0`
  - **react-dom**: `^19.1.0`
  - **react-scripts**: `5.0.1`

The `react-scripts` package handles the build configuration and scripts for starting, building, and testing the application.

-----

## Contribution Guidelines

If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add new feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Create a new Pull Request.

-----

## License

This project is licensed under the **MIT License**.
