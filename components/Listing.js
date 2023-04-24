// a simple listing component
export default function Listing({ network, id }) {
  return (
    <div
      data-widget='m-layout-complete-listing'
      data-id={id}
      data-network={network}
      data-grant-type='signature'
      data-client-id={process.env.NEXT_PUBLIC_CLIENT_ID}
      data-app-name={process.env.NEXT_PUBLIC_AUCTION_PAGE}
      // data-network='1'
      // data-id={id}
    ></div>
  );
}

// export default function Listing({ id }) {
//   return (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: `<div
//             data-widget='m-layout-complete-listing'
//             data-network='1'
//             data-id=${id}
//           ></div>`,
//       }}
//     />
//   );
// }
