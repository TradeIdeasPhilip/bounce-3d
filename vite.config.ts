import { ConfigEnv, UserConfigExport } from "vite";

// Help for this config file:  
// https://vitejs.dev/config/#server-open

export default function ({ }: ConfigEnv): UserConfigExport {
  return {
    // build.outDir and base are required for use with GitHub pages.
    build: { 
      outDir: "docs",
   }, base: "./",
    // Do not open a browser embedded in VSCode.
    // For some reason this page runs really slowly so the animation is jumpy.
    // This setting seems to be ignored.  😞
    server: { open: false }
  };
}

// TODO resize-test.html does not appear in the built/production version, only the debug version.
// Add it.
//
// This page is a starting point.
// https://vitejs.dev/guide/build.html#multi-page-app
// However, I ran into some problems.  After a lot of reading I think I need to change from
// vite.config.ts to vite.config.js.