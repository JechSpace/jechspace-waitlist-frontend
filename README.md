# JechSpace Waitlist Frontend

A modern, responsive single-page waitlist application for JechSpace. This project features localStorage-based submission tracking, smooth animations, and a clean user experience optimized for waitlist signups.

## ✨ Features

- **Single-Page Application**: Focused waitlist experience without unnecessary navigation
- **Smart Tracking**: localStorage-based submission tracking prevents duplicate signups
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion powered interactions
- **Form Validation**: Real-time validation with user-friendly error messages
- **API Integration**: Connected to JechSpace waitlist API
- **Success States**: Different messages for new vs returning users
- **Social Integration**: Links to social media platforms

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **UI Components**: shadcn/ui with Radix UI
- **Animations**: Framer Motion 12.18.1
- **Icons**: Lucide React 0.519.0
- **HTTP Client**: Axios 1.10.0
- **Form Validation**: Custom validation utilities
- **Storage**: Browser localStorage for submission tracking

## 📁 Project Structure

```text
JechSpace-waitlist-Frontend/
├── public/
│   ├── index.html
│   ├── favicon.png
│   └── logo-blue.png
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── input.jsx
│   │   ├── Navbar.jsx          # Simplified navbar (logo + CTA)
│   │   ├── WaitlistFooter.jsx  # Dedicated waitlist footer
│   │   └── WaitlistForm.jsx    # Main waitlist form with localStorage
│   ├── pages/
│   │   └── WaitlistPage.jsx    # Single page layout
│   ├── services/
│   │   └── api.js              # API integration
│   ├── hooks/
│   │   └── useWaitlist.js      # Waitlist submission hook
│   ├── utils/
│   │   ├── validation.js       # Form validation
│   │   └── waitlistStorage.js  # localStorage management
│   ├── App.jsx                 # Root component
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
