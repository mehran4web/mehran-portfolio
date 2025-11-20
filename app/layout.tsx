import './globals.css';
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
export const metadata = {
  title: 'Mehran\'s Protfolio',
  description: 'Full-Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
   <html lang="en">
     <body>
       <Navbar />
       <main>{children}</main>
       <Footer />
     </body>
   </html>
 );
}
