import Link from 'next/link';

const Header: React.FC = () => {
   return (
      <header className="bg-gray-800 text-white py-4">
         <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
               Home
            </Link>
            <div>
               <Link href="/About" className="mr-4">
                  About
               </Link>
               <Link href="/Contact">Contact</Link>
            </div>
         </nav>
      </header>
   );
};

export default Header;