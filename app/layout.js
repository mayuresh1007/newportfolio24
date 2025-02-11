// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ThemeSwitch from "./components/ThemeSwitch"; // Import ThemeSwitch component

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="">
//       <body className={`antialiased`}>
//         <Header />
//        {/* <div className="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
//       data-hs-theme-click-value="dark" > */}
//         {children}

//         {/* </div> */}
//         <Footer />
//         <script src="./node_modules/preline/dist/preline.js"></script>
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch"; // Import the ThemeSwitch component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// This script is injected to set the theme before the page loads
const setInitialThemeScript = `
(function() {
  const theme = localStorage.getItem('hs_theme') || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* <head>
        Inject the script to set the theme on page load
        <script dangerouslySetInnerHTML={{ __html: setInitialThemeScript }} />
      </head> */}
      <body className="antialiased">
        {/* <ThemeSwitch /> */}
        <Header />
        {children}
        <Footer />
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
