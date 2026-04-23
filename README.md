# 🎓 Student Enrollment Form (JPDB Micro Project)

A simple and interactive **Student Enrollment Form** built using **HTML, JavaScript, and JsonPowerDB (JPDB)**.
This project demonstrates how to perform **CRUD operations** using JPDB APIs with proper primary key handling.

---

## 🚀 Live Features

* 🔍 Fetch student record using **Roll No (Primary Key)**
* 💾 Save new student data
* ✏️ Update existing records
* 🔄 Reset form to initial state
* ✅ Input validation (no empty fields)
* ⚡ Dynamic enable/disable of form controls

---

## 🗂️ Database Configuration

| Property      | Value         |
| ------------- | ------------- |
| Database Name | SCHOOL-DB     |
| Relation Name | STUDENT-TABLE |
| Primary Key   | Roll_No       |

---

## 🧾 Form Fields

* Roll No *(Primary Key)*
* Full Name
* Class
* Birth Date
* Address
* Enrollment Date

---

## ⚙️ How It Works

### 🔹 Initial State

* Only **Roll No** field is enabled
* All other fields and buttons are disabled

---

### 🔹 Enter Roll No

#### ➤ If record does NOT exist:

* Enables **Save** and **Reset**
* Allows entering new data

#### ➤ If record EXISTS:

* Auto-fills form with existing data
* Enables **Update** and **Reset**
* Disables Roll No field

---

### 🔹 Save Operation

* Validates all fields
* Stores data using JPDB **PUT (IML command)**

---

### 🔹 Update Operation

* Uses internal **rec_no**
* Updates record using **UPDATE (IML command)**

---

### 🔹 Reset Operation

* Clears form
* Restores initial state

---

## 🔗 API Commands Used

| Command    | Type | Purpose              |
| ---------- | ---- | -------------------- |
| GET_BY_KEY | IRL  | Fetch record         |
| PUT        | IML  | Insert new record    |
| UPDATE     | IML  | Update existing data |

---

## 🛠️ Tech Stack

* HTML5
* JavaScript (Vanilla JS)
* JsonPowerDB (JPDB)
* jQuery

---

## 📂 Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/vitthal012/project_work.git
cd project_work
```

---

### 2. Add Your JPDB Token

Open `config.js` and replace:

```javascript
const connToken = "ENTER_YOUR_TOKEN_HERE";
const dbName = "SCHOOL-DB";
const relName = "STUDENT-TABLE";
```

### 3. Run the Project

* Open `index.html` in browser
  **OR**
* Use **Live Server** in VS Code 

Give it a ⭐ on GitHub!
