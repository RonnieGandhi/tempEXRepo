echo "installing backend...."
cd ../backend
npm install


source ../backend/config/dev.env

echo "creating database...."
sudo -u postgres createdb reddit-clone
sudo -u postgres -H -- psql -d reddit-clone < ../backend/src/db/db.sql
# npm run db-migrate up

echo "installing frontend...."
cd ../frontend
npm install

