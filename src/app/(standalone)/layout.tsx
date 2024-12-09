import Image from "next/image";
import Link from "next/link";

import { UserButton } from "@/components/userButton";
import { logo } from "@/config";

interface StandloneLayoutProps {
  children: React.ReactNode;
}

const StandloneLayout = ({ children }: StandloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="logo" width={32} height={32} />
              <span className="text-lg font-semibold text-gray-800">
                Structura
              </span>
            </div>
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandloneLayout;
