# Global Explorer 🌍

**Global Explorer** is a web application that fetches data from the [REST Countries API](https://restcountries.com/) and displays detailed information about countries in an interactive and visually appealing way. Users can explore countries, view their flags, population, region, capital, and more.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)

---

## Features

Global Explorer comes with a variety of features to enhance your experience:

- **Country Cards**: Display key information about each country, including:
  - Flag
  - Name
  - Population
  - Region
  - Capital
- **Search Functionality**: Search for countries by name.
- **Filter by Region**: Filter countries by region (e.g., Africa, Americas, Asia, Europe, Oceania).
- **Responsive Design**: Works seamlessly on all devices (desktop, tablet, mobile).
- **Dark Mode**: Toggle between light and dark themes for better readability.

---

## Installation

To set up Global Explorer locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/global-explorer.git
   cd global-explorer
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Open the application:
Visit http://localhost:3000 in your browser to view the application.

### Usage
Exploring Countries
On the homepage, you will see a list of country cards.

Each card displays the country's flag, name, population, region, and capital.

### Searching for a Country
Use the search bar at the top of the page to search for a specific country by name.

### Filtering by Region
Use the dropdown filter to display countries from a specific region (e.g., Africa, Europe).

### Dark Mode
Toggle the dark mode switch in the header to switch between light and dark themes.

### Technologies Used
Frontend:
javascript
HTML 
CSS (or Tailwind CSS/Styled Components, if used)

### Axios (for API requests)

### API:

REST Countries API

Tools:

Git (for version control)
npm (for dependency management)

API Integration
Global Explorer fetches data from the REST Countries API. The following endpoints are used:

#### All Countries: https://restcountries.com/v3.1/all
#### Country by Name: https://restcountries.com/v3.1/name/{name}
#### Country by Region: https://restcountries.com/v3.1/region/{region}

#### Example API Request

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

### **Example Screenshots Section**

```markdown
## Screenshots

### Home Page
![Home Page]
![image](https://github.com/user-attachments/assets/262ec5ea-f495-40c4-ba09-a5a2bf153e0a)

### Country Details
![Country Details]
![image](https://github.com/user-attachments/assets/293c36e7-62d5-4c25-930c-2209acfa3595)

### Dark Mode
![Dark Mode]
![image](https://github.com/user-attachments/assets/d2341986-bc27-44aa-af13-ffe4cbbf4ec0)

