'use client'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

const basePaths = ['/']; // Add more paths here if needed

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const title = useMemo(() => {
    if (pathname !== '/') {
      const segments = pathname!.split('/');
      return pathname!.split('/')[segments.length - 1].replace('%20', " ");
    }
    return (
      <div className="flex items-center">
        <Image
          src="/golden_wizzie.svg"
          height={50}
          width={50}
          priority
          style={{
            objectFit: "contain",
          }}
          alt="logo"
        />
      </div>
    );
  }, [pathname]);

  return (
    <div className="w-full h-fit">
      <div className="h-14 flex justify-between items-center gap-1 p-2 bg-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          {!basePaths.some(base => pathname === base) && (
            <button type='button' title='Back' onClick={() => router.back()}>
              <FaChevronLeft />
            </button>
          )}
          <h1 className="text-left text-3xl inline capitalize font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
