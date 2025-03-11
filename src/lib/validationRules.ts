import { FormData } from "@/types";

export const validationRules: Record<
  keyof FormData,
  { required?: boolean; message?: string; pattern?: RegExp }
> = {
  firstName: {
    required: true,
    message: 'First name is required',
    pattern: /^[A-Za-z]{2,50}$/,
  },
  lastName: {
    required: true,
    message: 'Last name is required',
    pattern: /^[A-Za-z]{2,50}$/,
  },
  supervisorEmail: {
    required: true,
    message:
      'Supervisor email must be in a valid format and contain @the4d.ca domain',
    pattern: /^[^\s@]+@the4d\.ca$/,
  },
  employeeId: {
    required: true,
    message: 'Employee ID must follow the format ABC-12345',
    pattern: /^[A-Z]{3}-\d{5}$/, 
  },
  phoneNumber: {
    required: true,
    message: 'Phone number must follow the format +1 (555) 555-5555',
    pattern: /^\+1 \(\d{3}\) \d{3}-\d{4}$/,
  },
  salary: {
    required: true,
    message: 'Annual salary must be a positive numeric value',
    pattern: /^[1-9]\d*$/, 
  },
  startDate: {
    required: true,
    message: 'Start date is required',
  },
  costCenter: {
    required: true,
    message: 'Cost center must follow the format AB-123-ABC',
    pattern: /^[A-Z]{2}-\d{3}-[A-Z]{3}$/, 
  },
  projectCode: {
    required: true,
    message: 'Project code must follow the format PRJ-YEAR-001',
    pattern: /^PRJ-\d{4}-\d{3}$/, 
  },
  privacyConsent: {
    required: true,
    message: 'You must accept the privacy policy',
  },
};
