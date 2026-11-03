## Better Auth
``
npx auth@latest generate --output ./prisma/schema/auth.prisma --config ./src/app/config/auth.ts
`` 

``
npx prisma migrate dev 
npx prisma generate
``