import { AnimeParadoxXPageShell } from '@/components/animeparadoxx/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function AnimeParadoxXLayout({
  children,
}: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#070A13]">
      <Navbar scroll={true} />
      <main className="flex-1">
        <AnimeParadoxXPageShell>{children}</AnimeParadoxXPageShell>
      </main>
      <Footer />
    </div>
  );
}
