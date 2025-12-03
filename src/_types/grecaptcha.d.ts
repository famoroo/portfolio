// declare global {
//     interface Window {
//         grecaptcha: {
//             enterprise: {
//                 execute: (
//                     siteKey: string,
//                     options: { action: string }
//                 ) => Promise<string>;
//             };
//             ready: (callback: () => void) => void;
//         };
//     }
// }
declare global {
    interface Window {
        grecaptcha: {
            enterprise: {
                ready: (callback: () => void) => void;
                execute: (siteKey: string, options: { action: string }) => Promise<string>;
            };
        };
    }
}
export {};
