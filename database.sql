-- CREATE TABLE public.users (
--   "user_id" serial PRIMARY KEY,
--   "username" varchar NOT NULL,
--   "password" varchar NOT NULL,
--   "date_created" varchar DEFAULT CURRENT_DATE
-- ) WITH (
--   OIDS=FALSE
-- );

-- CREATE TABLE  public.charities (
--   "campaign_id" serial PRIMARY KEY,
--   "user_id" serial NOT NULL REFERENCES public.users(user_id),
--   "campaign_name" varchar NOT NULL,
--   "campaign_url" varchar NOT NULL,
--   "campaign_description" varchar,
--   "campaign_type" varchar NOT NULL, 
--   "date_created" varchar DEFAULT CURRENT_DATE
-- ) WITH (
--   OIDS=FALSE
-- );

-- ALTER TABLE public.charities ADD CONSTRAINT "users_fk0" FOREIGN KEY ("user_id") REFERENCES  public.users("user_id");

-- psql -d PG_URI  -f database.sql