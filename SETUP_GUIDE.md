# 📖 Setup Guide - Sabzevar Services Directory

## 🏗️ Complete Setup Instructions

### System Requirements
- **OS:** Linux, macOS, or Windows
- **RAM:** 8GB minimum
- **Disk Space:** 20GB minimum

---

## 📱 Flutter App Setup

### 1. Install Flutter SDK

**macOS/Linux:**
```bash
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:`pwd`/flutter/bin"
flutter doctor
```

**Windows:**
- Download from https://flutter.dev/download
- Extract and add to PATH

### 2. Setup Android Development

```bash
flutter doctor --android-licenses
# Accept all licenses
```

### 3. Build and Run

```bash
cd flutter_app
flutter pub get
flutter run
```

---

## 💻 Backend Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Setup Database

**Using Docker:**
```bash
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  postgres:15-alpine
```

**Using Local PostgreSQL:**
```bash
psql -U postgres < database/init.sql
```

### 4. Start Backend

```bash
npm run dev
```

API will be available at `http://localhost:3000`

---

## 🎨 Admin Panel Setup

### 1. Install Dependencies

```bash
cd admin-panel
npm install
```

### 2. Start Development Server

```bash
npm start
```

Admin panel will open at `http://localhost:3000`

---

## 🐳 Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

This starts:
- PostgreSQL on `localhost:5432`
- Redis on `localhost:6379`
- Backend API on `localhost:3000`

---

## 📋 Database Migrations

### Run migrations
```bash
cd backend
npm run migrate
```

### View database
```bash
psql -U postgres -d sabzevar_services
\dt  # List all tables
```

---

## ✅ Verify Setup

### Check all services

1. **Backend Health Check:**
   ```bash
   curl http://localhost:3000/health
   ```

2. **Database Connection:**
   ```bash
   psql -U postgres -d sabzevar_services -c "SELECT COUNT(*) FROM services;"
   ```

3. **Flutter App:**
   ```bash
   cd flutter_app
   flutter run
   ```

---

## 🚀 Build APK

```bash
cd flutter_app
flutter build apk --release
```

APK location: `flutter_app/build/app/outputs/flutter-app-release.apk`

---

## 🔧 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Database connection error
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Or restart Docker container
docker-compose restart postgres
```

### Flutter build fails
```bash
flutter clean
flutter pub get
flutter doctor -v
```

---

## 📞 Support

For issues, check:
1. Flutter docs: https://flutter.dev
2. Express docs: https://expressjs.com
3. PostgreSQL docs: https://www.postgresql.org/docs/
