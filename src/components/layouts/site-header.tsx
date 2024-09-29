import React from "react";
import { UserCircle } from "lucide-react";
import Image from "next/image";

const SiteHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center">
          {/* Replace with your actual logo */}
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </div>
        <div className="flex items-center">
          <UserCircle className="w-8 h-8 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
