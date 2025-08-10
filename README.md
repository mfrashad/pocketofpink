# Pocket of Pink (POP) Website

A modern, responsive website for Pocket of Pink - a youth-led, intersectional feminist non-profit organization empowering children and youth through creative education, advocacy, and art in Malaysia.

## 🌟 About Pocket of Pink

Pocket of Pink is a feminist initiative building safe, empowering spaces for young people to explore gender, identity, and justice. Founded by 17-year-old Ain Husniza in 2021 after her viral #MakeSchoolASaferPlace movement, POP uses art, education, and community dialogue to challenge harmful norms and spark change.

### Key Achievements
- **22.4M+ views** on #MakeSchoolASaferPlace campaign
- **220,000+ people** reached through digital campaigns
- **KLSCAH Civil Society Award** recipient
- **WikiImpact Top 100 Changemakers** recognition

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static site hosting ready

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # Organization story and values
│   ├── Activities.tsx  # Community activities
│   ├── Contact.tsx     # Contact information
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── Mission.tsx     # Mission and vision
│   ├── Projects.tsx    # Key initiatives
│   ├── Team.tsx        # Team members
│   └── ...
├── pages/              # Individual page components
│   ├── Altorithm.tsx   # Alt//orithm project page
│   └── ExpressToEmpower.tsx # Express to Empower page
├── config/             # Configuration files
│   ├── images.ts       # Image path constants
│   └── media.ts        # Media-related configs
└── images/             # Local image assets
```

## 🎯 Key Features

### Core Sections
- **Hero Section**: Compelling introduction with call-to-action
- **About**: Organization story and founding narrative
- **Mission**: Four core pillars of the organization
- **Team**: Leadership and team member profiles
- **Projects**: Showcase of key initiatives
- **Media Mentions**: Press coverage and recognition
- **Supporters**: Partner organizations
- **Get Involved**: Donation and volunteer opportunities

### Special Pages
- **Express to Empower**: Educational workshops and Pocket Pal activity book
- **Alt//orithm**: Digital safety and feminist digital spaces initiative

### Interactive Elements
- **Donation Modal**: Integrated donation system
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Hover effects and transitions
- **Hash-based Routing**: Client-side navigation

## 🛠 Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary Pink**: `from-pink-600 to-pink-500`
- **Background**: White with pink gradient accents
- **Text**: Various shades of gray for hierarchy

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable typography
- **Interactive**: Consistent button and link styling

### Components
- **Gradient Cards**: Consistent card design with hover effects
- **Icon Integration**: Lucide React icons throughout
- **Responsive Grid**: Flexible layouts for all screen sizes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: `sm:` (640px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🔧 Configuration

### Image Management
Images are centrally managed in `src/config/images.ts` for:
- Easy path updates
- TypeScript autocompletion
- Consistent asset organization

### SEO Optimization
- Meta descriptions and titles
- Favicon and app icons
- Web manifest for PWA capabilities

## 🌐 Deployment

The project is built as a static site and can be deployed to:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Build for Production
```bash
npm run build
```

The `dist/` folder contains the production-ready files.

## 🤝 Contributing

This is the official website for Pocket of Pink. For contributions:

1. Follow the existing code style and component patterns
2. Ensure responsive design is maintained
3. Test on multiple devices and browsers
4. Maintain accessibility standards
5. Keep the mission and values of POP at the forefront

## 📄 License

This project represents the digital presence of Pocket of Pink, a registered non-profit organization in Malaysia.

## 📞 Contact

For more information about Pocket of Pink:
- **Website**: [Live site URL]
- **Email**: [Contact email]
- **Social Media**: [Social links]

---

*Building safe, empowering spaces for young people to explore gender, identity, and justice through creativity and community.*
