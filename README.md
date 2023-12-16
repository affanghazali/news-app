# News App

A multi-lingual (Arabic and English) news app built using MUI components for the front-end and Django for the back-end. The app retrieves news data from the News API and supports different themes and language preferences.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Key](#api-key)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Multi-lingual support (Arabic and English).
- Dynamic theme selection (Light and Dark).
- Select news topics using chips.
- Responsive design with MUI components.
- Error handling for API failures and image loading failures.
- Small and focused commits for easy version tracking.

## Technologies

- [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- [Material-UI (MUI)](https://mui.com/)
- [News API](https://newsapi.org/)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/news-app.git
   ```

2. Install Dependencies:

   ```cd mui-news-app
   npm install
   ```

3. Create a .env file in the root directory with the following:

   ```
   REACT_APP_NEWS_API_KEY=your-news-api-key
   ```

4. Run the app:

   ```
   npm start
   ```

## Usage

- Select your preferred language using the language toggle.
- Choose a theme (Light/Dark) with the theme toggle.
- Use chips to select news topics (e.g., Apple, Meta, Netflix, etc.).
- View news articles with images and open them in a new tab.
- Handle API failures and image loading failures gracefully.

## API Key

- This project uses the News API to fetch news data. You need to obtain a free API key from News API and set it in the .env file.

## Folder Structure

/news-app
|-- /src
| |-- /components
| | |-- LanguageToggle.tsx
| | |-- ThemeToggle.tsx
| | |-- NewsList.tsx
| |-- App.tsx
| |-- index.tsx
|-- .env
|-- ... (other project files)
