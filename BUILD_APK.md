# 🚀 How to Build APK

## Prerequisites

1. **Install Flutter SDK** (version 3.0 or higher)
   ```bash
   flutter --version
   ```

2. **Install Android SDK** (via Android Studio or command line)
   ```bash
   flutter doctor
   ```

3. **Java Development Kit (JDK)** - version 11 or higher

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/yasincodmboy-ops/sabzevar-services-directory.git
cd sabzevar-services-directory
```

### 2. Navigate to Flutter app
```bash
cd flutter_app
```

### 3. Install dependencies
```bash
flutter pub get
```

## Build APK

### Debug APK (for testing)
```bash
flutter build apk --debug
```

**Output:** `build/app/outputs/flutter-app-debug.apk`

### Release APK (for production)
```bash
flutter build apk --release
```

**Output:** `build/app/outputs/flutter-app-release.apk`

## Configure Signing (for Google Play)

### 1. Create a keystore
```bash
keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

### 2. Create `android/key.properties`
```properties
storePassword=your_store_password
keyPassword=your_key_password
keyAlias=upload
storeFile=/path/to/key.jks
```

### 3. Build signed APK
```bash
flutter build apk --release
```

## Build AAB (Android App Bundle) for Google Play

```bash
flutter build appbundle --release
```

**Output:** `build/app/outputs/bundle/release/app-release.aab`

## Install on Device

### Connect Android device (enable USB debugging)
```bash
flutter devices
```

### Run APK
```bash
adb install build/app/outputs/flutter-app-release.apk
```

## Troubleshooting

### Issue: Gradle build failed
**Solution:**
```bash
cd android
./gradlew clean
cd ..
flutter clean
flutter pub get
flutter build apk --release
```

### Issue: SDK not found
**Solution:**
```bash
flutter doctor --android-licenses
flutter doctor -v
```

### Issue: Java version
```bash
java -version
# Should be 11 or higher
```

## Optimize APK Size

```bash
flutter build apk --release --split-per-abi
```

This creates separate APKs for each CPU architecture (smaller download).

## Verify APK

```bash
adb install build/app/outputs/flutter-app-release.apk
adb shell am start -n com.vaya.sabzevar/.MainActivity
```

---

**Size:** ~50-70 MB (depending on assets)
**Minimum SDK:** Android 5.1 (API 21)
**Target SDK:** Android 13+ (API 33+)
