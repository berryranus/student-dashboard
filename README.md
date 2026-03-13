# 🎓 Student Dashboard - Grade Management System

**Student Dashboard** is a dynamic single-page web application developed with **React (Vite)** designed to help educators or administrators efficiently manage, filter, and track student grades. It features an interactive UI with real-time validation, dynamic filtering, and sorting capabilities.

---

## 🚀 Project Purpose

The primary goal of this project is to provide a clean and intuitive interface for managing a list of students and their academic performance. Unlike static tables, Student Dashboard offers:
* **Real-time Input Validation:** Prevents duplicate entries and ensures grades are within logical bounds (0-100).
* **Dynamic Filtering:** Instantly view students based on their pass/fail status (>=60 is a pass).
* **Smart Sorting:** Organize the list by grades (High-to-Low or Low-to-High) with a single click.
* **Instant Search:** Quickly locate specific students using a reactive search bar.

---

## 🛠️ Tech Stack & Architecture

This project follows a **Component-Based Architecture** and utilizes the following key technologies:

### 1. Core Framework
* **React 19 (via Vite):** Used for building a fast, modern, and reactive web application interface. Vite was chosen over Create React App (CRA) for significantly faster Hot Module Replacement (HMR) and optimized build times.

### 2. State Management
* **React Hooks (`useState`):** * *Purpose:* To manage local and lifted state. The main state (students list) is held in `App.jsx` and passed down as props to child components (`StudentList`, `StudentControls`, `StudentForm`).
    * *Why?* For a focused, single-page application of this scale, React's native state management is the most efficient choice, avoiding the unnecessary overhead of external libraries like Redux.

### 3. Derived State Logic
* **Data Processing Pipeline:** * *Purpose:* Instead of creating multiple state variables for filtered or sorted lists, the app uses a derived state approach (`visibleStudents`). 
    * *Logic:* The raw `students` array is passed through a chain of `.filter()` (for pass/fail and search queries) and `.sort()` methods before rendering. This ensures the UI is always perfectly synced with the original data.

---

## 📱 Key Features

### ✅ Advanced Filtering & Sorting
Users can filter the student list by "All", "Pass" (>=60), or "Fail" (<60). Additionally, the list can be toggled to sort grades from highest to lowest or vice versa.

### ✅ Real-Time Search functionality
A responsive search bar allows users to type a student's name and see the list update instantly, without needing a submit button or page reload.

### ✅ Duplicate Prevention & Validation
The application smartly checks the existing data before adding a new student. If a user tries to add a name that already exists (case-insensitive) or inputs an invalid grade (e.g., negative numbers or text), the form provides instant error feedback.

### ✅ Empty State Handling
The UI gracefully handles scenarios where there is no data. It displays specific, helpful messages when the entire list is empty or when a search query yields no results.

---

## 💡 Challenges & Solutions

During the development process, several technical challenges were encountered. Here is how they were overcome:

### 1. Managing Complex Derived State
* **Challenge:** Applying search, filter, and sort operations simultaneously without overwriting or losing the original student data.
* **Solution:** I implemented a functional pipeline in `App.jsx`. The `visibleStudents` constant is calculated on every render by chaining `.filter()` for pass/fail, then another `.filter()` for the search query, and finally a `.sort()` method. This keeps the original `students` state immutable and the UI reactive.

### 2. Case-Insensitive Duplicate Checking
* **Challenge:** Preventing duplicate student names regardless of how the user types them (e.g., "Ali" vs "ali").
* **Solution:** Within the `handleAddStudent` function, I utilized the `.some()` method to check existing names by converting both the stored name and the new input to lowercase (`toLowerCase()`) before comparison.

---

## 📂 Project Structure
```bash
student-dashboard/
├── src/
│   ├── components/      
│   │   ├── StudentControls.jsx # Search, Filter, and Sort buttons
│   │   ├── StudentForm.jsx     # Input form with validation
│   │   ├── StudentItem.jsx     # Individual student row
│   │   └── StudentList.jsx     # Maps through students and handles empty states
│   ├── styles/
│   │   └── lab-styles.css      # Custom styling
│   ├── App.jsx                 # Main entry point & State holder
│   └── main.jsx                # React DOM render
├── package.json
└── README.md
```
---

**🚀 How to Set Up and Run the Project**
Please follow these instructions step-by-step to set up and run the project on your local machine without any issues.

1. Prerequisites (Before You Start)

Ensure you have the following installed on your computer:

Node.js: (Version 18 or higher recommended) - Download Here

2. Installation Steps

Step 1: Clone or Download the Repository
Open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
git clone [https://github.com/berryranus/student-dashboard.git](https://github.com/berryranus/student-dashboard.git)
cd student-dashboard
```
(If you downloaded the ZIP file, extract it, open the terminal in that folder, and skip the git clone command.)
 
**Step 2: Install Dependencies**
This project relies on Vite and React packages. Install them by running:

```bash
npm install
```
Wait for the installation to complete.


**3. Running the Application**

Step 3: Start the Development Server
Run the following command to start Vite:

```bash
npm run dev
```

**Step 4: Launch on Your Browser**
After running the command, you will see a local server address in your terminal (usually http://localhost:5173/).

Open your preferred web browser and navigate to that link to view the application.

---
