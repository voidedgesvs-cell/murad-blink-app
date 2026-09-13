const fs=require('fs');
const p='android/app/src/main/AndroidManifest.xml';
let s=fs.readFileSync(p,'utf8');
const perms=`\n    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n    <uses-permission android:name="android.permission.INTERNET" />`;
if(!s.includes('ACCESS_FINE_LOCATION')) s=s.replace(/<manifest([^>]*)>/, `<manifest$1>${perms}`);
fs.writeFileSync(p,s);
console.log('Android location permissions ready');
