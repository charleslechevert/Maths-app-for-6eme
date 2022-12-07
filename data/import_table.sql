CREATE EXTENSION "uuid-ossp";
CREATE EXTENSION pgcrypto;

BEGIN;

DROP TABLE IF EXISTS "player" , "register", "class";

CREATE TABLE IF NOT EXISTS "player"(
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
  "pseudo" VARCHAR(25) UNIQUE NOT NULL,
  "fname" VARCHAR(25) NOT NULL,
  "lname" VARCHAR(25) NOT NULL,
  "email" VARCHAR(50) UNIQUE NOT NULL,
  "classroom" VARCHAR(6),
  "password" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "register"(
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
  "player_id" uuid NOT NULL REFERENCES "player"("id"),
  "game_id" TEXT NOT NULL,
  "score" INTEGER NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "class"(
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
  "code" VARCHAR(6) NOT NULL,
  "name" VARCHAR(10) NOT NULL,
  "player_id" uuid NOT NULL REFERENCES "player"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);

COMMIT;