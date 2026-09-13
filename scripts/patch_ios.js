const fs=require('fs');
const p='ios/App/App/Info.plist';
let s=fs.readFileSync(p,'utf8');
if(!s.includes('NSLocationWhenInUseUsageDescription')){
  s=s.replace('</dict>', `  <key>NSLocationWhenInUseUsageDescription</key>\n  <string>MURAD BLINK использует геолокацию только когда вы разрешаете делиться ей с друзьями.</string>\n  <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>\n  <string>MURAD BLINK использует геолокацию для показа вашей позиции друзьям только с вашего разрешения.</string>\n</dict>`);
}
fs.writeFileSync(p,s);
console.log('iOS location descriptions ready');
