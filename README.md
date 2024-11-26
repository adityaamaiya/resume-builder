# **Resume Builder Application**

## **Project Overview**

This is a dynamic **Resume Builder Application** built with React. It allows users to input their details, preview the resume in real-time, switch between themes, and export it as a PDF. Users can choose from multiple layouts to customize the appearance of their resume.

---

## **Features**

### **1. User Inputs**

- **Personal Info**:
  - Name, Email, Phone, LinkedIn, GitHub.
- **Education**:
  - Institution, Degree, Year of Passing.
- **Work Experience**:
  - Company, Role, Duration, Achievements.
- **Skills**:
  - Multi-select dropdown to add skills.
- **Projects**:
  - Title, Description, Technologies Used.

### **2. State Management**

- Uses **React Context** for managing and updating user data globally.

### **3. Dynamic Resume Preview**

- Real-time updates of the resume as the form is filled.
- Two layout options for customization.

### **4. Theme Switching**

- Light Mode and Dark Mode support.
- The user's theme preference is **persisted in localStorage**.

### **5. Save as PDF**

- Export the resume as a PDF using **`react-to-pdf`**.

---

## **Technologies Used**

- **React**: Framework for building the application.
- **React Context**: For global state management.
- **CSS Modules**: For styling.
- **react-to-pdf**: For PDF export functionality.
- **localStorage**: To persist theme preference.

---

## **Getting Started**

### **1. Clone the Repository**

```bash
git clone <repository_url>
cd resume-builder
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Run the Application**

```bash
npm start
```

The application will run at http://localhost:3000

## **Usage**

1. **Fill Out the Form**:

   - Enter your details in the following sections:
     - **Personal Info**: Name, Email, Phone, LinkedIn, GitHub.
     - **Education**: Institution, Degree, Year of Passing.
     - **Work Experience**: Company, Role, Duration, Achievements.
     - **Skills**: Add skills using a multi-select dropdown.
     - **Projects**: Provide Title, Description, and Technologies Used.

2. **Real-Time Preview**:

   - View your resume dynamically updated in the preview panel as you fill out the form.

3. **Choose Layout**:

   - Toggle between two layout options to customize your resume.

4. **Theme Switching**:

   - Switch between Light and Dark Modes.
   - Your theme preference is saved using **localStorage**.

5. **Save as PDF**:
   - Click the **Download PDF** button to export your resume.

## **Project Demo**

[**Link to the deployed application**](https://resume-builder-vert-seven.vercel.app/)

---

## **Future Enhancements**

- Add drag-and-drop functionality for section reordering.
- Enable custom layout designs.
- Save resumes online with user authentication.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

**Enjoy creating your resume! 🎉**
