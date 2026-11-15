// Headlines and text. next/font needs literal options in every call.
import { Libre_Baskerville, Nunito_Sans } from 'next/font/google';

const serif = Libre_Baskerville({ subsets: ['latin'], display: 'swap', weight: ['400', '700'], variable: '--f-serif' });
const sans = Nunito_Sans({ subsets: ['latin'], display: 'swap', variable: '--f-sans' });

/** The two variable class names for <html>. */
export const fontClasses = `${serif.variable} ${sans.variable}`;
