import 'dotenv/config';
import 'server-only';

function getRequiredEnv(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(
      `${key} is not set. Configure this environment variable in Vercel project settings or your local .env file.`
    );
  }

  return value;
}

export const baseUrl = (() => {
  const url =
    process.env.BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  if (!url) {
    throw new Error(
      'BASE_URL is not set and VERCEL_URL was not provided. Add BASE_URL to your environment so redirects and Stripe links work.'
    );
  }

  return url.replace(/\/$/, '');
})();

export const postgresUrl = getRequiredEnv('POSTGRES_URL');
export const stripeSecretKey = getRequiredEnv('STRIPE_SECRET_KEY');
export const stripeWebhookSecret = getRequiredEnv('STRIPE_WEBHOOK_SECRET');
export const authSecret = getRequiredEnv('AUTH_SECRET');
