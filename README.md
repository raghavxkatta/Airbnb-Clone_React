Experiences Platform
A React-based web application that showcases online and in-person experiences, inspired by Airbnb's experiences platform. Users can browse through various activities offered by hosts, check availability, and view pricing details.
Features

Dynamic card-based UI for displaying experiences
Responsive layout with a modern design
Status badges for sold-out and online experiences
Rating system with review counts
Price display per person
Location-based filtering

Components Structure
The application is built with the following components:

Navbar: Contains the logo and navigation elements
Hero: Displays the main banner with photo grid and tagline
Card: Reusable component for displaying individual experiences

Shows pricing, ratings, and availability
Dynamic badge system for status (SOLD OUT/ONLINE)
Image display with star ratings



Installation

Clone the repository:

bashCopygit clone [your-repository-url]

Install dependencies:

bashCopynpm install

Start the development server:

bashCopynpm start
Project Structure
Copysrc/
├── components/
│   ├── Card.js
│   ├── Hero.js
│   └── Navbar.js
├── assets/
│   ├── star.png
│   ├── logo.png
│   └── photogrid.png
├── App.js
└── data.js
Dependencies

React
React DOM


Usage
The application renders a list of experience cards based on the data provided in data.js. Each card displays:

Experience cover image
Rating and review count
Location
Title
Price per person
Availability status

Contributing

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

License

Acknowledgments

Inspired by Airbnb's experiences platform
