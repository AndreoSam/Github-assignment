<!---  
Welcome to our technical assessment!  
We see you've found our hidden message - you're already showing great attention to detail!  
To acknowledge this discovery, feel free to add your favorite programming meme in the **Documentation** section.  
We love seeing personality shine through! 😊  
-->  

# 4D Technical Assessment - React/Node.js

## Introduction

Welcome to the technical assessment for the 4D Engineering team. This assessment simulates a real-world project scenario where you'll work on Admin Insurance, our document management system designed for large organizations.

## Project Overview

Admin Insurance helps organizations manage employee documentation processes across multiple countries. The system handles form submissions, document processing, and maintains data security and accessibility standards.

## Current System Components

1. Landing Page: Basic introduction and navigation
2. Form Page: Form submission 
3. Results Page: Data search

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd admin-insurance
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
# Start both frontend and backend servers
npm run dev:full

# Or start them separately:
npm run dev        # Frontend only
npm run server     # Backend only
```

4. Access the application:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Project Structure
```
admin-insurance/
├── src/                    # Frontend source code
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   └── services/          # API services
├── server/                # Backend server code
├── tests/                 # Test files
│   └── e2e/              # End-to-end tests
└── tickets/              # Implementation tickets
```

## Testing

The project includes both WebDriverIO and Playwright for testing. Here's an example test:

```typescript
// tests/e2e/playwright/form.spec.ts
import { test, expect } from '@playwright/test';

test('form submission workflow', async ({ page }) => {
  // Navigate to form page
  await page.goto('/form');
  
  // Fill required fields
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="email"]', 'john.doe@example.com');
  
  // Submit form
  await page.click('button[type="submit"]');
  
  // Verify submission
  await expect(page.locator('text=Form submitted successfully')).toBeVisible();
});
```

Run tests using:
```bash
# Run all tests
npm run test:e2e

# Run specific test suite
npm run test:wdio
npm run test:playwright
```

## Implementation Tickets

Detailed specifications for each implementation task can be found in the `tickets/` directory. Please select the tickets assigned to you and implement them according to the specifications.

## Evaluation Criteria

Your submission will be evaluated based on:
- Code architecture and design patterns
- Component structure and reusability
- Testing implementation
- Documentation quality
- Performance optimization techniques

## Note About AI Tools

While you may use AI tools like ChatGPT or GitHub Copilot for assistance, ensure that you fully understand and can explain all code implementations. The core solution should reflect your technical thinking and problem-solving approach.

## Documentation  
1. Understanding Requirements
- Analyzed the provided documentation.
- Identified key functionalities required for the Form Page validation.
- Reviewed the existing project structure.

2. Challenge 1: Expanding Validation Rules
- Problem
    The provided validationRules only covered firstName, but the form had multiple fields (e.g., lastName, employeeId, phoneNumber) requiring specific validation criteria.

- Approach
    Comprehensive Rules: I expanded validationRules to include all fields from the FormData type, defining:
      - required: Whether the field is mandatory.
      - pattern: A regex to enforce format (e.g., ^[A-Z]{3}-\d{5}$ for employeeId).
      - message: A custom error message for clarity.
    Adjusted firstName Rule: The provided rule limited firstName to 2-10 characters, but I increased it to 2-50 (^[A-Za-z]{2,50}$) as required.
    Type Safety: Used Record<keyof FormData, ...> to ensure every field in FormData could have a rule.

3. Challenge 2: Implementing Real-Time Validation
- Problem
    The provided handleInputChange only updated formData and logged a generic "Errors occurred" message if an error existed, offering no real-time validation or user feedback. The errors state was unused effectively.

- Approach
    Added validateField Function
    Created a reusable function to validate a single field against its rule.
    Updated to call validateField after every change, enabling real-time validation
    UI Feedback: Positioned error spans below inputs (moved from above in some cases) for consistency and better readability.

4. Challenge 3: Strengthening Form Submission
- Problem
    The provided handleSubmit submitted data without validation, risking invalid data reaching the API. The empty catch block didn't log any potential errors.

- Approach
    Full Validation Before Submission.
    Added logic to check all fields against validationRules.
    Kept the timestamp addition and API call, ensuring continuity with the original intent.

5. Challenge 4: Handling Checkbox Validation
- Problem
    The provided privacyConsent checkbox had no validation, despite being critical for compliance. Its boolean nature required special handling compared to string inputs.
    Also even when the checkbox is checked and is true, still the error field persisted below.

- Approach
    Custom Handler: Used onCheckedChange to update formData and clear errors
    In handleSubmit, treated false as a validation failure for privacyConsent.