# MealPrepGenie MVP

## About
MealPrepGenie is an AI-powered meal planning assistant that helps users create personalized meal plans based on their dietary preferences, restrictions, and goals. The MVP focuses on delivering core functionality while maintaining a simple and intuitive user experience.

## Development Journey & Known Issues

### Authentication Challenges
During development and testing, we encountered persistent authentication issues with the production and preview environments:

1. **OAuth Flow Issues**:
   - Inconsistent redirect handling in production/preview environments
   - Authentication state management challenges across different domains
   - Google OAuth integration complexities with multiple environments

2. **Recommended Testing Approach**:
   For the most reliable testing experience, we strongly recommend:
   - Using the local development environment (`http://localhost:5173`)
   - Following the local setup instructions below
   - This approach provides the most consistent authentication experience

### Core Features
- **AI-Powered Meal Planning**: Generate personalized meal plans using advanced AI algorithms
- **Dietary Preferences**: Support for various dietary restrictions and preferences
- **Customizable Plans**: Adjust meal counts and calorie intake
- **Credit System**: Purchase and manage credits for generating meal plans

## Getting Started

### Local Development Setup (Recommended)
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
Required environment variables:
```
VITE_SUPABASE_URL=https://nbtobeqeftxympbskqqo.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idG9iZXFlZnR4eW1wYnNrcXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MzM1NjMsImV4cCI6MjA1MDQwOTU2M30._ZzMNDdjmW0qo2LBL51qIk50-KjlEe2d6l6R_3EHcgg
```

### For Instructors & Contributors
To ensure the most reliable testing experience:

1. **Use Local Development**:
   - Run the application locally using `npm run dev`
   - Access via `http://localhost:5173`
   - This bypasses domain-related authentication complexities

2. **Test Account Access**:
   - Use the configured test account: ben@circuitstream.ca
   - Local environment provides the most stable authentication flow

3. **Known Limitations**:
   - Production domain (mealprepgenie.xyz) may experience intermittent authentication issues
   - Preview environments through publish.lovable.dev have similar constraints
   - These limitations are documented for transparency but don't impact core functionality

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

## Contributing
This is an MVP version. For feature requests or bug reports, please open an issue in the repository.

## License
This project is private and proprietary. All rights reserved.