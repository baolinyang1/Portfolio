# EmailJS Setup Guide

Your contact form is now ready to work, but you need to configure EmailJS to enable email sending functionality.

## Steps to Set Up EmailJS:

### 1. Create an EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create an Email Service
- In the EmailJS dashboard, go to "Email Services"
- Add a new service (Gmail, Outlook, etc.)
- Follow the setup instructions for your email provider

### 3. Create an Email Template
- Go to "Email Templates"
- Create a new template with these variables:
  - `{{from_name}}` - sender's name
  - `{{from_email}}` - sender's email
  - `{{message}}` - message content
  - `{{to_email}}` - your email (baoliny961@gmail.com)

### 4. Get Your Configuration Values
- **Service ID**: Found in your Email Services section
- **Template ID**: Found in your Email Templates section  
- **Public Key**: Found in Account > API Keys

### 5. Update Your Code
In `src/components/ContactSection.tsx`, replace these placeholders:
```typescript
"YOUR_SERVICE_ID", // Replace with your EmailJS service ID
"YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
"YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
```

### 6. Test Your Contact Form
- Run your development server: `npm run dev`
- Navigate to the contact section
- Fill out and submit the form
- Check your email inbox

## Example EmailJS Template:
```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Security Note:
The EmailJS public key is safe to expose in frontend code. EmailJS handles the actual email sending securely on their servers.

## Free Tier Limits:
- 200 emails per month
- EmailJS branding in emails
- For production use, consider upgrading to a paid plan 