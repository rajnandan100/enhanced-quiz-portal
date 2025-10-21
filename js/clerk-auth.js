// QP-JS-001: Clerk Authentication Integration
// QP-AUTH-001: Sample config (replace with real keys in production)
const CLERK_PUBLISHABLE_KEY = 'pk_test_sample_publishable_key_1234567890';

window.addEventListener('load', async () => {
  if (!window.Clerk) return;
  await Clerk.load({ publishableKey: CLERK_PUBLISHABLE_KEY });

  const path = window.location.pathname;
  if (path.includes('sign-in')) {
    Clerk.mountSignIn(document.getElementById('sign-in'));
  }
  if (path.includes('sign-up')) {
    Clerk.mountSignUp(document.getElementById('sign-up'));
  }
  if (path.includes('dashboard')) {
    const user = Clerk.user;
    document.getElementById('userName').textContent = user?.firstName || 'User';
    Clerk.mountUserProfile(document.getElementById('userProfile'));
  }
});
