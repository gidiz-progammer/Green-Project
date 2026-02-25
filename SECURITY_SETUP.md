# Security Setup Checklist (Firebase + Vercel)

## 1) Deploy Firestore Rules
Run in project root:

```powershell
firebase login
firebase use green-world-project
firebase deploy --only firestore:rules
```

The rules file used is `firestore.rules`.

## 2) Create Admin Users (Required for `admin.html`)
In Firestore Console, create document:

- Collection: `admins`
- Document ID: `<firebase-auth-uid>`
- Fields:
  - `active` (boolean): `true`
  - `email` (string): user email
  - `createdAt` (timestamp): current time

Only users with `admins/{uid}.active == true` can write `product_overrides`.

## 3) Enable Auth Providers
Firebase Console -> Authentication -> Sign-in method:

- Enable `Email/Password`

## 4) Add Authorized Domains
Firebase Console -> Authentication -> Settings -> Authorized domains:

- Add your Vercel domain (for example `your-project.vercel.app`)
- Add your custom domain if used

## 5) Enable App Check (Anti-Bot)
App Check cannot be fully activated from code alone.

Do this in Firebase Console:

1. App Check -> Register your Web app
2. Choose `reCAPTCHA v3`
3. Add your site key to client code where needed
4. Turn on enforcement for:
   - Authentication
   - Firestore

Then expose your key in HTML before module scripts:

```html
<script>
  window.__APP_CHECK_SITE_KEY__ = "YOUR_RECAPTCHA_V3_SITE_KEY";
</script>
```

## 6) Recommended Follow-up

- Add Cloud Functions for sensitive admin actions.
- Add audit logging collection for admin writes/deletes.
- Rotate admin access by removing unused `admins/{uid}` docs.
