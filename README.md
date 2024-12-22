# MealPrepGenie MVP

## About
MealPrepGenie is an AI-powered meal planning assistant that helps users create personalized meal plans based on their dietary preferences, restrictions, and goals. The MVP focuses on delivering core functionality while maintaining a simple and intuitive user experience.

## Development Journey & Acknowledgments
This full-stack application represented one of the most challenging yet rewarding projects in my development journey. Through the integration of complex technologies and features, several significant challenges were encountered and overcome:

### Key Challenges & Solutions
- **Authentication Flow**: Initially faced issues with Supabase auth integration and protected routes. Leveraged Lovable AI's guidance to implement a robust auth system.
- **Payment Integration**: Stripe implementation presented unique challenges with webhook handling and credit system integration. Chat GPT provided valuable insights for troubleshooting.
- **Edge Functions**: Successfully implemented serverless functions for handling sensitive operations, though initial CORS and environment variable configuration required careful debugging.

### Time Management & Support
Thanks to the powerful combination of Lovable AI and Chat GPT, this project was completed on schedule, breaking my usual pattern of delivery delays. This achievement demonstrates the value of leveraging AI tools effectively while maintaining code quality and project scope.

Special thanks to Ben Organ, our instructor, whose understanding, availability, and empathy with beginner challenges made this journey significantly more manageable. His support in navigating complex concepts and debugging sessions was invaluable.

## Features

### Core Features
- **AI-Powered Meal Planning**: Generate personalized meal plans using advanced AI algorithms
- **Dietary Preferences**: Support for various dietary restrictions and preferences
  - Omnivore, Vegetarian, Vegan, Pescatarian, Keto, Paleo
  - Allergy considerations
  - Cuisine preferences
- **Customizable Plans**: Adjust meal counts and calorie intake
- **Credit System**: Purchase and manage credits for generating meal plans

### User Experience
- **Onboarding Flow**: Simple questionnaire to capture user preferences
- **Dashboard**: Easy-to-use interface for generating and managing meal plans
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack
- **Frontend**: React with TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Backend**: Supabase
  - Authentication
  - Database
  - Edge Functions
- **Payment Processing**: Stripe integration
- **AI Integration**: OpenAI API

## Getting Started

### Prerequisites
- Node.js & npm installed
- Git for version control

### Local Development
```bash
# Clone the repository
git clone https://github.com/Elephante152/MPGv2.git

# Navigate to project directory
cd MPGv2

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
The following environment variables are required:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key
- `VITE_STRIPE_PUBLIC_KEY`: Stripe public key

## Testing Instructions

### Authentication Setup
The application supports multiple testing environments:

1. **Production Environment**:
   - URL: [mealprepgenie.xyz](https://mealprepgenie.xyz)
   - Fully configured for production use

2. **Lovable Preview Environment**:
   - URL: Available through publish.lovable.dev
   - Configured for testing and review purposes

3. **Local Development**:
   - URL: http://localhost:5173
   - Suitable for local testing and development

### For Instructors
- Test user access has been configured for ben@circuitstream.ca
- OAuth authentication is pre-configured for all testing environments
- No additional setup required for authentication testing

### Supported Testing Environments
The application is configured to work seamlessly across:
- Production domain (mealprepgenie.xyz)
- Lovable preview environment (publish.lovable.dev)
- Local development (localhost:5173)

## Deployment Status
The application is currently live at [mealprepgenie.xyz](https://mealprepgenie.xyz).

## Contributing
This is an MVP version. For feature requests or bug reports, please open an issue in the repository.

## License
This project is private and proprietary. All rights reserved.