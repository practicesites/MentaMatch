# MentaMatch Platform

## Overview

MentaMatch is a mentoring platform designed to connect young professionals with senior experts. The platform provides user registration, authentication, messaging, profile management, session scheduling, and subscription management. The application has a frontend built with HTML, CSS, JavaScript and Bootstrap, with a Flask-based Python backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

MentaMatch follows a client-server architecture:

- **Frontend**: HTML, CSS, and JavaScript with Bootstrap for UI components
- **Backend**: Python Flask application 
- **Database**: PostgreSQL for data persistence
- **Deployment**: Gunicorn web server with autoscaling configuration

The application is structured as a traditional web application with server-side rendering rather than a single-page application. Pages are delivered from the server with complete HTML, which is enhanced with client-side JavaScript for animations and interactivity.

## Key Components

### Frontend

1. **Public Pages**
   - Landing page (`index.html`)
   - Authentication pages (`login.html`, `register.html`)

2. **Dashboard and User Features**
   - Dashboard (`dashboard.html`)
   - User profile management (`profile.html`)
   - Messaging system (`messaging.html`)
   - Session scheduling (`schedule.html`)
   - Subscription management (`subscription.html`)

3. **UI Components**
   - Navigation bar
   - Sidebar for authenticated users
   - Bootstrap-based responsive design
   - CSS animations (`animations.js`)

### Backend

1. **Authentication System**
   - User registration and login using Flask-Login
   - Session management
   - Email validation

2. **Data Models** (implied from frontend and dependencies)
   - User model (mentors and mentees)
   - Messaging/chat model
   - Session/appointment model
   - Subscription/payment model

3. **API Routes** (implied)
   - Authentication endpoints
   - User profile endpoints
   - Messaging endpoints
   - Session management endpoints
   - Subscription endpoints

## Data Flow

1. **Authentication Flow**
   - Users register via the registration form
   - Credentials are validated and stored in PostgreSQL
   - Flask-Login manages user sessions
   - Authenticated users are directed to the dashboard

2. **Mentoring Flow**
   - Mentees can browse and select mentors
   - Communication happens through the messaging system
   - Sessions can be scheduled and managed
   - Subscription status controls access to platform features

3. **Dashboard Experience**
   - Centralized hub for users to access all features
   - Navigation through sidebar with notification indicators
   - Profile management with settings and preferences

## External Dependencies

### Frontend Dependencies
- Bootstrap (via CDN)
- Font Awesome (via CDN)
- Google Fonts - Poppins (via CDN)

### Backend Dependencies
- Flask: Web framework
- Flask-Login: User session management
- Flask-SQLAlchemy: ORM for database interactions
- Email-validator: Email validation library
- Psycopg2-binary: PostgreSQL adapter
- Gunicorn: WSGI HTTP Server

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Runtime Environment**
   - Python 3.11
   - OpenSSL and PostgreSQL packages via Nix
   
2. **Server Configuration**
   - Gunicorn server running on port 5000
   - Autoscaling enabled for handling variable loads
   
3. **Database**
   - PostgreSQL for data persistence
   
4. **Workflow**
   - Custom workflow defined for starting the application
   - Hot reloading enabled for development

### Development and Execution

The application is run using Gunicorn, binding to port 5000 with reuse-port and reload options enabled for development. The entry point is `main:app`.

For local development, the workflow is configured to automatically start the application with the necessary server configuration.