# Recipe Viewer with Favorites

A **Next.js** application that allows users to browse recipes, view details, and save their favorite recipes. The app uses **TheMealDB API** for recipe data and **MongoDB Atlas** to store user favorites.

## 🌟 Features

- **View Recipes**: Browse a list of recipes with images and names.
- **Recipe Details**: Click on a recipe to see its ingredients, instructions, and image.
- **Save Favorites**: Mark recipes as "favorites" and store them in a database.
- **Favorites Page**: View and manage all your saved favorite recipes.
- **Responsive Design**: Works seamlessly on phones, tablets, and desktops.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- **External API**: [TheMealDB API](https://www.themealdb.com/)

---

## 🛠️ Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: Install from [Node.js Official Website](https://nodejs.org/)
- **MongoDB Atlas**: Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 1. Clone the Repository

git clone https://github.com/your-username/recipe-viewer.git
cd recipe-viewer

### 2. Install Dependencies

npm install

### Set Up Environment Variables

Create a .env.local file in the root of the project

Add the following environment variables to .env.local
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

Replace:

<username>: Your MongoDB username.
<password>: Your MongoDB password.
<dbname>: Your MongoDB database name.

### Run the Development Server

npm run dev

📂 Project Structure

recipe-viewer/
├── .env.local                # Environment variables
├── .gitignore                # Ignored files for Git
├── node_modules/             # Installed dependencies
├── package.json              # Project metadata and scripts
├── public/                   # Static assets
│   └── favicon.ico           # App icon
├── src/                      # Source files
│   ├── pages/                # Next.js pages
│   │   ├── api/              # Backend API routes
│   │   │   ├── favorites.js  # API to manage favorite recipes
│   │   │   └── test.js       # Test MongoDB connection
│   │   ├── favorites.js      # Favorites page
│   │   └── index.js          # Home page (recipes list)
│   ├── components/           # Reusable components
│   │   ├── Header.js         # Navigation bar
│   │   ├── RecipeCard.js     # Recipe display card
│   │   └── RecipeList.js     # Grid of recipe cards
│   ├── styles/               # Global and component-specific styles
│   │   └── globals.css       # Global styles
│   ├── utils/                # Utility functions
│   │   └── dbConnect.js      # MongoDB connection utility
│   └── models/               # Database models
│       └── FavoriteRecipe.js # Mongoose schema for favorites
├── README.md                 # Documentation
└── vercel.json               # Vercel deployment config

🧩 Usage
1. View Recipes
Visit the homepage to see a list of recipes fetched from TheMealDB API.
2. Recipe Details
Click on a recipe to view its detailed information, including ingredients, instructions, and an image.
3. Save Favorites
Mark recipes as "favorites" to store them in the database.
4. Manage Favorites
Visit the "Favorites" page to view and manage saved recipes.

🛡️ API Endpoints
Favorites API
GET /api/favorites: Fetch all saved favorite recipes.
POST /api/favorites: Save a new favorite recipe.
DELETE /api/favorites: Delete a favorite recipe.

🌍 Deployment

Steps to Deploy:
1. Install the Vercel CLI:
npm install -g vercel
2. Deploy the app:
vercel

📖 References
Next.js Documentation
MongoDB Atlas Documentation
TheMealDB API Documentation

🖥️ Screenshots
Home Page:

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

✨ Author
Mohamed Shoaib
GitHub
LinkedIn
