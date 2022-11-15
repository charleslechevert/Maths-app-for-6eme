BEGIN;

DROP TABLE IF EXISTS "chapter", "story",
"game";

CREATE TABLE IF NOT EXISTS "chapter"(
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "position" INTEGER NOT NULL,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "game"(
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "position" INTEGER NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "img" TEXT NOT NULL,
  "chapter_id" INTEGER NOT NULL REFERENCES "chapter"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "story"(
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "position" INTEGER NOT NULL,
  "content" TEXT NOT NULL,
  "game_id" INTEGER NOT NULL REFERENCES "game"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
  "updated_at" TIMESTAMPTZ
);


COMMIT;