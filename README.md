# Justin Potter - Portfolio

A clean, minimal, and professional portfolio website built with React and TypeScript. Inspired by Christopher Cherupil's portfolio style with a focus on clean typography, generous spacing, and sophisticated design.

## 🎨 Design Features

- **Clean & Minimal**: Black, white, and grey color scheme
- **Professional Typography**: Large, clean fonts with proper hierarchy
- **Generous Spacing**: Breathing room throughout the design
- **Smooth Transitions**: Subtle animations and hover effects
- **Responsive Design**: Optimized for all device sizes
- **Modern Aesthetic**: Sophisticated and professional appearance

## 🚀 Technologies Used

- **Frontend**: React 19.1.0, TypeScript 4.9.5
- **Styling**: CSS3 with CSS Variables
- **Build Tool**: Create React App
- **Fonts**: Inter (Google Fonts)
- **Icons**: Emoji icons for simplicity

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── sections/           # Main portfolio sections
│   ├── Hero.tsx        # Hero section with intro
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills & experience
│   ├── Projects.tsx    # Featured projects
│   └── Contact.tsx     # Contact information
├── styles/             # Styling files
│   └── globals.css     # Global styles and variables
├── assets/             # Images and other assets
└── App.tsx             # Main application component
```

## 🎯 Portfolio Sections

### 1. Hero Section
- Name and title (Justin Potter - Fullstack Developer)
- Brief professional introduction
- Call-to-action buttons
- Social media links

### 2. About Section
- Professional background
- Personal story and journey
- Education (B.Sc. Computer Science)
- Experience (2+ years Frontend Development)

### 3. Skills & Experience
- Technical skills with proficiency levels
- Frontend: HTML5, CSS3, SASS, JavaScript, React, Node.js
- Backend: Express.js, PostgreSQL, Git, Docker
- Interactive skill bars with experience levels

### 4. Projects Section
- Featured project: CommerceFlow
- Modern full-stack e-commerce platform
- Technologies: React, Node.js, PostgreSQL, Express
- Live demo and source code links

### 5. Contact Section
- Contact information (Brooklyn, NY)
- Social media links (LinkedIn, GitHub)
- Professional availability status
- Direct email integration

## 🛠️ Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary-black: #000000;
  --primary-white: #ffffff;
  --light-grey: #f8f8f8;
  --medium-grey: #666666;
  --dark-grey: #333333;
  --border-grey: #e0e0e0;
}
```

### Typography
The project uses Inter font family with various weights:
- 300: Light
- 400: Regular
- 500: Medium
- 600: Semi-bold
- 700: Bold

### Spacing
Consistent spacing is maintained using CSS variables:
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 2rem
- `--spacing-lg`: 4rem
- `--spacing-xl`: 8rem

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and add it to `App.tsx`
3. Follow the existing component structure and styling patterns

### Adding New Components
1. Create reusable components in `src/components/`
2. Use TypeScript interfaces for props
3. Follow the established styling conventions

### Styling Guidelines
- Use CSS variables for consistency
- Implement hover effects for interactivity
- Maintain generous spacing
- Keep animations subtle and smooth
- Ensure accessibility standards

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Justin Potter - [Bjmpotter@gmail.com](mailto:Bjmpotter@gmail.com)

- **LinkedIn**: [Justin Potter](https://www.linkedin.com/in/justin-mpotter/)
- **GitHub**: [@whitelight-whiteheat](https://github.com/whitelight-whiteheat)
- **Location**: Brooklyn, NY

Project Link: [https://github.com/whitelight-whiteheat/portfolio](https://github.com/whitelight-whiteheat/portfolio)
