ALTER TABLE "users" ADD COLUMN "age2" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "age";