
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.5e19cd86ef574625a8e4f4359b1a2237',
  appName: 'teen-safe-guide-uganda',
  webDir: 'dist',
  server: {
    url: 'https://5e19cd86-ef57-4625-a8e4-f4359b1a2237.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000
    }
  }
};

export default config;
