-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_payables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "emissionDate" DATETIME NOT NULL,
    "assignorId" TEXT NOT NULL,
    CONSTRAINT "payables_assignorId_fkey" FOREIGN KEY ("assignorId") REFERENCES "assignors" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_payables" ("assignorId", "emissionDate", "id", "value") SELECT "assignorId", "emissionDate", "id", "value" FROM "payables";
DROP TABLE "payables";
ALTER TABLE "new_payables" RENAME TO "payables";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
