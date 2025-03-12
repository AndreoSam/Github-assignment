import { FormData } from "@/types";
/*
 * Validation rules for form fields. Submit button won't work if any of these rules break.
 * 
 * Each field has specific validation criteria such as required status, custom error messages,
 * and regex patterns to ensure correct input formatting.
 */
export const validationRules: Record<
  keyof FormData,
  { required?: boolean; message?: string; pattern?: RegExp }
> = {
  /*
   * First Name Validation
   * - Required: Yes
   * - Pattern: Only alphabets, minimum 2 and maximum 50 characters
   */
  firstName: {
    required: true,
    message: 'First name is required',
    pattern: /^[A-Za-z]{2,50}$/,
  },
  /*
   * Last Name Validation
   * - Required: Yes
   * - Pattern: Only alphabets, minimum 2 and maximum 50 characters
   */
  lastName: {
    required: true,
    message: 'Last name is required',
    pattern: /^[A-Za-z]{2,50}$/,
  },
  /*
   * Supervisor Email Validation
   * - Required: Yes
   * - Pattern: Must be a valid email format with "@the4d.ca" domain
   */
  supervisorEmail: {
    required: true,
    message:
      'Supervisor email must be in a valid format and contain @the4d.ca domain',
    pattern: /^[^\s@]+@the4d\.ca$/,
  },
  /*
   * Employee ID Validation
   * - Required: Yes
   * - Pattern: Must follow the format "ABC-12345" (3 uppercase letters, hyphen, 5 digits)
   */
  employeeId: {
    required: true,
    message: 'Employee ID must follow the format ABC-12345',
    pattern: /^[A-Z]{3}-\d{5}$/,
  },
  /*
   * Phone Number Validation
   * - Required: Yes
   * - Pattern: Must follow the format "+1 (555) 555-5555"
   */
  phoneNumber: {
    required: true,
    message: 'Phone number must follow the format +1 (555) 555-5555',
    pattern: /^\+1 \(\d{3}\) \d{3}-\d{4}$/,
  },
  /*
   * Annual Salary Validation
   * - Required: Yes
   * - Pattern: Must be a positive numeric value
   */
  salary: {
    required: true,
    message: 'Annual salary must be a positive numeric value',
    pattern: /^[1-9]\d*$/,
  },
  /*
   * Start Date Validation
   * - Required: Yes
   * - No specific pattern since it's a date input
   */
  startDate: {
    required: true,
    message: 'Start date is required',
  },
  /*
   * Cost Center Validation
   * - Required: Yes
   * - Pattern: Must follow the format "AB-123-ABC" (2 uppercase letters, hyphen, 3 digits, hyphen, 3 uppercase letters)
   */
  costCenter: {
    required: true,
    message: 'Cost center must follow the format AB-123-ABC',
    pattern: /^[A-Z]{2}-\d{3}-[A-Z]{3}$/,
  },
  /*
   * Project Code Validation
   * - Required: Yes
   * - Pattern: Must follow the format "PRJ-YEAR-001" (PRJ, hyphen, 4-digit year, hyphen, 3-digit code)
   */
  projectCode: {
    required: true,
    message: 'Project code must follow the format PRJ-YEAR-001',
    pattern: /^PRJ-\d{4}-\d{3}$/,
  },
  /*
   * Privacy Consent Validation
   * - Required: Yes
   * - No pattern needed as it's a boolean checkbox
   */
  privacyConsent: {
    required: true,
    message: 'You must accept the privacy policy',
  },
};
