
import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  // Application configuration
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().port().default(3000),

  // Database configuration
  DATABASE_URL: Joi.string().required(),

  // Authentication configuration
  JWT_ACCESS_SECRET: Joi.string().min(32).required(),

  JWT_REFRESH_SECRET: Joi.string().min(32).required(),

  JWT_ACCESS_EXPIRES_IN: Joi.string().default('10m'),

  JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),

  // Frontend configuration
  FRONTEND_URL: Joi.string().uri().default('http://localhost:5173'),

  // Optional observability credentials
  OBSERVE_APP_KEY: Joi.string().allow('').optional(),

  OBSERVE_APP_SECRET: Joi.string().allow('').optional(),
});
