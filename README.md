# Angelie Marie B. Dinawanao — Internship Portfolio

A responsive one-page portfolio built with **Next.js (App Router), React, HTML/JSX, and CSS**.

## Run locally

1. Install Node.js (LTS).
2. Extract this project folder.
3. Open a terminal in the folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Visit http://localhost:3000.

To create a production build:

```bash
npm run build
npm start
```

## Personalize before publishing

### 1. Profile photo
The hero currently uses a designed initials placeholder. Add your photo to `public/` (for example, `profile.jpg`) and replace the `.portrait-placeholder` block in `app/page.js` with:

```jsx
<img className="profile-photo" src="/profile.jpg" alt="Angelie Marie Dinawanao" />
```

Then add `.profile-photo { width:100%; height:100%; object-fit:cover; }` to `app/globals.css`.

### 2. Resume
Place your PDF resume in `public/` and name it exactly:

`Angelie-Dinawanao-Resume.pdf`

The Download Resume button already points to that filename.

### 3. Contact form email delivery
The contact form is configured to submit to **23011028@student.buksu.edu.ph** using FormSubmit.

- On the first real submission, FormSubmit sends an activation email to that inbox.
- Open the activation email and confirm the address. Until activation is completed, form delivery will not be active.
- FormSubmit is a third-party service; review its terms and privacy policy before using it for personal information.
- Test the form after activation. The form uses CAPTCHA to reduce spam.

If you prefer not to use a third-party form service, connect an email provider such as Resend or EmailJS and keep its secret/API key out of client-side code.

### 4. Certificates
The source document contains placeholders rather than actual certification names. The portfolio therefore has a clearly marked section ready for verified certificates. Add the actual title, issuer, and year when available.

### 5. Verify project details
Project names and GitHub links were taken from the supplied portfolio content. Review each repository and update descriptions/tags if you want them to reflect the exact technologies and your individual contribution.

## Sections included

- Home / introduction
- About
- Areas of interest and tools
- Academic development journey
- Student leadership experience
- GitHub projects
- Certificates and professional development
- Contact details and contact form

## Notes
The portfolio does not invent a phone number, profile photo, resume, or certificate details. Add those assets and verified information before publishing.
