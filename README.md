# HARAYA SOLUTIONS DEV TEMPLATE

USE THIS TEMPLATE FOR CREATING CUSTOM WEB APPLICATIONS AND SYSTEM. FRONTEND RUNS ON NextJS AND BACKEND RUNS ON LARABEL


# FILE TREE

ROOT FOLDER CONTAINS THE FOLLOWING:

src
-----backend 
-----cypress --> for general app testing.
-----frontend
docker-compose-local.yml
docker-compose-prod.yml
github-actions.yml
LICENSE
README.MD

# HOW TO USE
1. Create an .env to the root folder.
Here's the insde of .env
DB_CONNECTION=mysql
DB_HOST=database.harayasolutions.local
DB_PORT=3306
DB_DATABASE=haraya_db
DB_USERNAME=root
DB_PASSWORD=harayalangsakalaminamochris
MAIL_HOST=mailer.harayasolutions.local
MAIL_PORT=8025

2. ADD THE FOLLOWING TO HOST FILE
	127.0.0.1 frontend.harayasolutions.local
	127.0.0.1 backend.harayasolutions.local
	127.0.0.1 database.harayasolutions.local
	127.0.0.1 mailing.harayasolutions.local
3. On the root folder run: docker compose -f docker-compose-local.yml up -d