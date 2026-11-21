# Fetch GitHub Repositories

A clean, interactive web application that fetches and displays public GitHub repositories for any given username using the GitHub REST API.

## Live Demo
🔗 [View Live Project](https://hadeer77.github.io/Fetch-Repositories/)

## Features
- Instant Repository Lookup: Enter any valid GitHub username to fetch all their public repositories.
- Repository Details: Displays each repository's name, star count, and a direct link to visit the repository in a new tab.
- Input Validation: Alerts the user if the search field is submitted empty.
- Dynamic DOM Rendering: Clears previous results and dynamically builds clean repository cards for each search.

## Built With
- HTML5 – Semantic structure
- CSS3 – Responsive layout and styling
- Vanilla JavaScript (ES6+) – Fetch API, Promises, and DOM manipulation
- GitHub REST API – https://api.github.com/users/{username}/repos
