import Image from "next/image";
import { container } from  "styles/header.css"
import  "styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        {/* The container class is a string that has been converted into a class. When it is used here, all the vanilla extract stuff are gone  */}
        <div className={container}>
          <Image src="/react.png" width={25} height={25} alt="ReactJS Logo" />
          <div className="">NextJS App Router</div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
