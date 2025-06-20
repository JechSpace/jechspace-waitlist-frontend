# JechSpace Waitlist Frontend

A modern, responsive waitlist landing page for JechSpace. This project leverages React for dynamic UI, Tailwind CSS for styling, and Framer Motion for smooth animations.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Form Validation**: Custom validation utilities

## Project Structure

```
JechSpace-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WaitlistForm.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── WaitlistPage.jsx
│   ├── services/
│   │   └── api.js        # Backend integration
│   ├── hooks/
│   │   └── useWaitlist.js
│   ├── utils/
│   │   └── validation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd JechSpace-waitlist-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your backend API URL:

   ```env
   VITE_API_URL=http://localhost:8000/api
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Backend Integration

The frontend is designed to work with a Django backend. Update the API endpoints in `src/services/api.js` to match your backend URLs:

### Required API Endpoints

- `POST /api/waitlist/` - Submit waitlist form
- `GET /api/waitlist/check/?email=<email>` - Check if email exists
- `GET /api/waitlist/stats/` - Get waitlist statistics (optional)

### Expected API Response Format

```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe"
  },
  "message": "Successfully joined the waitlist!"
}
```

## Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
