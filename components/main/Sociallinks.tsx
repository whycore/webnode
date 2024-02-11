// import React from 'react';
// import { Socials } from '@/constants';


// const SocialLinks = () => {
//     const handleClick = (url: string | undefined) => {
//       if (url) {
//         window.open(url, '_blank');
//       }
//     };
  
//     return (
//       <div>
//         {Socials.map((social, index) => (
//           <button key={index} onClick={() => handleClick(social?.url)}>
//             <picture>
//               <source
//                 srcSet={social.src} // Add different resolutions if necessary
//                 media="(min-width: 800px)" // Add media queries if necessary
//               />
//               <img
//                 src={social.src}
//                 alt={social.name}
//                 loading="lazy" // Lazy loading to improve performance
//               />
//             </picture>
//           </button>
//         ))}
//       </div>
//     );
//   }
  
//   export default SocialLinks;



