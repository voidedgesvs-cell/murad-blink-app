MURAD BLINK — Windows + Android + iPhone project
=================================================

Это один проект для трёх платформ.

WINDOWS:
GitHub -> Actions -> Build Windows EXE -> Run workflow
Скачать Artifact: MURAD-BLINK-Windows-EXE

ANDROID:
GitHub -> Actions -> Build Android APK -> Run workflow
Скачать Artifact: MURAD-BLINK-Android-APK
Внутри будет app-debug.apk. Его можно установить на Android вручную.
Android сам один раз попросит разрешение на точную геолокацию и сохранит выбор приложения.

IPHONE / IOS:
Проект подготовлен через Capacitor. Workflow Build iOS Simulator App делает версию для симулятора.
Для установки на настоящий iPhone Apple требует подпись приложения Apple ID / Apple Developer и сборку через Xcode/TestFlight.
Это ограничение iOS, а не MURAD BLINK.

ВАЖНО:
- В Windows должна быть включена служба местоположения.
- На Android включите Location/GPS и дайте приложению разрешение "Точное местоположение".
- Данные аккаунтов/друзей остаются через Supabase.
- Встроенная игра MURAD ОПТОМ находится внутри index.html.
