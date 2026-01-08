-- CreateTable
CREATE TABLE "xPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "xPost_pkey" PRIMARY KEY ("id")
);
