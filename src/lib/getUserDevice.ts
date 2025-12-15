// Coleta dados do dispositivo do usuário de forma ética
// Sem coletar dados sensíveis
export interface DeviceData {
  userAgent: string;
  platform: string;
  language: string;
  screenWidth: number;
  screenHeight: number;
  timestamp: string;
  timezone: string;
}

/**
 * Coleta dados básicos do dispositivo do navegador
 * Executado apenas no client-side
 */
export function getUserDevice(): DeviceData {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    timestamp: new Date().toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}
