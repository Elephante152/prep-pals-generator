# MealPrepGenie MVP

## About
MealPrepGenie is an AI-powered meal planning assistant that helps users create personalized meal plans based on their dietary preferences, restrictions, and goals. The MVP focuses on delivering core functionality while maintaining a simple and intuitive user experience.

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

## Contributing
This is an MVP version. For feature requests or bug reports, please open an issue in the repository.

## License
This project is private and proprietary. All rights reserved.