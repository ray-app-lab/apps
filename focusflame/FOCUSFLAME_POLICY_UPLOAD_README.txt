Focus Flame iOS legal pages
==============================

Files to publish from this folder:

  privacy_en.html   English Privacy Policy
  privacy_ja.html   Japanese Privacy Policy
  terms_en.html     English Terms of Use
  terms_ja.html     Japanese Terms of Use
  index.html        Language/document entry page
  index_ja.html     Japanese language/document entry page
  legal.css         Shared stylesheet required by every page above
  source-guard.js   Shared source-guard script used by every page above

Recommended public HTTPS URLs after deployment:

  https://<your-domain>/focusflame/privacy_en.html
  https://<your-domain>/focusflame/terms_en.html

Before an App Store submission:

1. Confirm the deployed pages are publicly reachable without a login and do not
   redirect to localhost, a private network, or temporary content.
2. Confirm that ray.app.lab@gmail.com is monitored and usable as the public
   support contact. These pages identify the provider as Masahiro Ito,
   operating as RayAppLab. Before submission, confirm any address required by
   the applicable law; do not invent an address.
3. Ask the business/legal owner to review the policy and terms against the final
   app, subscription configuration, App Privacy declaration, and support process.
4. Copy the final public URLs only into the ignored iOS config file:

     ios/Config/Secrets.xcconfig

     FOCUSFLAME_PRIVACY_POLICY_URL = https://<your-domain>/focusflame/privacy_en.html
     FOCUSFLAME_TERMS_OF_USE_URL = https://<your-domain>/focusflame/terms_en.html

   Do not commit Secrets.xcconfig because it can contain sensitive configuration.
   The public URLs themselves are not secrets, but this repository intentionally
   keeps the complete local configuration file out of Git.

   The iOS app rejects non-HTTPS URLs and literal localhost, loopback, or
   private-IP hosts. It cannot prove that a URL is publicly reachable, so test
   the deployed links manually before enabling purchases or submitting the app.
