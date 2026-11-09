import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gray-950 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
           
            <Image src="/images/truP.png" alt="TruBooker Logo" width={50} height={50} />
            
            <span className="text-lg font-bold text-white">TruBooker</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Book bus and ride trips across Nigeria with ease. Our blog shares travel tips,
            route guides and news to help you move smarter.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white">Blog Home</Link></li>
            <li><Link href="/#latest" className="hover:text-white">Latest Posts</Link></li>
            <li><a href="https://trubooker.com" className="hover:text-white">Book a Trip</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="https://trubooker.com" className="hover:text-white">About TruBooker</a></li>
            <li><a href="mailto:support@trubooker.com" className="hover:text-white">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs">
          © 2026 TruBooker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}