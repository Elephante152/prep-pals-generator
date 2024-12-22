# MealPrepGenie MVP

## ⚠️ Important Notice for Evaluators
**Current Deployment Status (as of March 19, 2024):**
- The production site (mealprepgenie.xyz) is experiencing authentication issues due to ongoing HTTPS certificate provisioning and DNS propagation
- These issues manifest as blank screens during login/signup attempts
- Expected resolution time: 24-48 hours for full HTTPS and DNS propagation

### Recommended Testing Approach
Due to the ongoing deployment configuration, we strongly recommend:

1. **Local Testing Environment**
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
   Access the application at: http://localhost:5173

2. **Environment Variables Setup**
   Create a `.env` file in the root directory with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

## Technical Implementation Overview

### Architecture & Framework Usage
- **Frontend**: React with TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: React Query & Context API
- **Backend**: Supabase
  - Authentication
  - Database
  - Edge Functions
  - Row Level Security (RLS)

### Core Integrations

#### 1. Authentication & Authorization
- **OAuth Integration**: Google Sign-in
- **Session Management**: Supabase Auth
- **Role-Based Access**: RLS policies for:
  - User credits management
  - Meal plan access
  - Credit package viewing

#### 2. AI Integration (OpenAI)
- Model: gpt-4o-mini
- Implementation: Supabase Edge Functions
- Features:
  - Meal plan generation
  - Dietary recommendations
  - Recipe customization

#### 3. Payment Processing (Stripe)
- **Credit System**:
  - Secure payment processing
  - Webhook integration
  - Credit balance management
- **Features**:
  - Custom amount support
  - Transaction history
  - Automatic credit updates

### Testing & Debugging
- Console logging for critical operations
- Error boundary implementation
- Comprehensive error handling
- Toast notifications for user feedback

### Security Measures
- Environment variable protection
- API key management through Supabase
- Secure webhook handling
- RLS policy enforcement

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

## Known Issues & Troubleshooting
1. **Production Environment (mealprepgenie.xyz)**
   - Blank screen after login/signup attempts
   - Root cause: Ongoing HTTPS certificate provisioning and DNS propagation
   - Status: Being addressed through GitHub Pages configuration

2. **Authentication Flow**
   - Works as expected in local development
   - Production issues related to domain configuration
   - Temporary workaround: Use local development environment

## Testing Instructions

### For BEN
- Primary test account: ben@circuitstream.ca
- **Recommended**: Use local development environment
- All features fully functional in local setup
- OAuth and email authentication configured for all environments

### Local Development Setup
1. Clone and install as described above
2. Use http://localhost:5173 for testing
3. All authentication methods fully functional
4. Complete feature set available for testing

## Contributing
This is an MVP version. For feature requests or bug reports, please open an issue in the repository.

## License
This project is private and proprietary. All rights reserved.