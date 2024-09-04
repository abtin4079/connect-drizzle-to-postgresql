DO $$ BEGIN
 CREATE TYPE "public"."user_role" AS ENUM('admin', 'basic');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
