# 🤖 AI Chat Lab - Next Generation Chat Platform

<div align="center">
  AILab LLM Ui
  
  ![Next.js](https://img.shields.io/badge/Next.js-14.1.3-black)
  ![React](https://img.shields.io/badge/React-18.0.0-blue)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.3-ff69b4)
</div>

## 🌟 Features

- 🎨 Modern and responsive design with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📊 Interactive charts with Recharts
- 🔐 Secure authentication system
- 📱 Mobile-first approach
- 🎯 Real-time analytics
- 🌙 Dark mode support (coming soon)

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx       # Login page
│   │   ├── register/
│   │   │   └── page.tsx       # Registration page
│   │   └── forgot-password/
│   │       └── page.tsx       # Password reset page
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard
│   ├── settings/
│   │   └── page.tsx          # User settings
│   ├── plans/
│   │   └── page.tsx          # Subscription plans
│   ├── usage/
│   │   └── page.tsx          # Usage statistics
│   ├── faq/
│   │   └── page.tsx          # FAQ page
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── metadata.ts          # SEO metadata
└── components/              # Reusable components
```

## 🛠️ Tech Stack

### Core
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS

### UI/UX
- **Framer Motion**: Animations
- **Recharts**: Data visualization
- **Headless UI**: Accessible components
- **Heroicons**: Beautiful icons

### Development
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS compatibility

## 📦 Dependencies

```json
{
  "dependencies": {
    "@headlessui/react": "^1.7.18",
    "@heroicons/react": "^2.1.1",
    "@stripe/stripe-js": "^3.0.7",
    "framer-motion": "^11.0.3",
    "next": "14.1.3",
    "react": "^18",
    "react-dom": "^18",
    "recharts": "^2.12.2"
  },
  "devDependencies": {
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.3",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-chat-lab.git
cd ai-chat-lab
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Visit [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### 🏠 Home Page
- Welcome section
- Feature highlights
- Quick start guide

### 🔐 Authentication
- Email/Password login
- Social login (Google, GitHub)
- Password recovery
- Registration with email verification

### ⚙️ Settings
- Profile management
- Notification preferences
- Security settings
- Appearance customization
- Billing & subscription

### 📊 Usage Statistics
- Real-time analytics
- User activity metrics
- Message statistics
- Response time tracking

### 💰 Plans & Pricing
- Subscription tiers
- Feature comparison
- Billing cycles
- Payment processing

### 👑 Admin Dashboard
- User management
- System metrics
- Content moderation
- Settings management

### ❓ FAQ
- Searchable questions
- Category filtering
- Interactive answers

## 🎨 Design System

### Colors
- Primary: Purple (#8B5CF6)
- Secondary: Indigo (#6366F1)
- Text: Gray (#1A1A1A)
- Background: Light Gray (#F8F7FC)

### Typography
- Font: Plus Jakarta Sans
- Headings: Bold
- Body: Regular
- Monospace: For code blocks

### Components
- Cards with hover effects
- Animated buttons
- Interactive forms
- Responsive navigation
- Custom select inputs
- Data visualization charts

## 🔜 Roadmap

- [ ] Dark mode implementation
- [ ] Real-time chat features
- [ ] AI model integration
- [ ] Voice commands
- [ ] Mobile app development
- [ ] API documentation
- [ ] Internationalization

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Framer Motion team for the animation library
- All contributors and supporters

---

<div align="center">
  Made with ❤️ by GikkiLab Team
</div>
