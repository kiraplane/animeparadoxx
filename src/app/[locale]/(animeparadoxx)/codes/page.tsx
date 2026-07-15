import { CodeCopyButton } from '@/components/animeparadoxx/code-copy-button';
import { FaqSection } from '@/components/animeparadoxx/faq-section';
import { Badge } from '@/components/ui/badge';
import {
  activeCodes,
  expiredCodes,
  needsCheckCodes,
} from '@/data/animeparadoxx/codes';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Paradox X Codes (July 2026)',
    description:
      'Working Anime Paradox X codes for gems, gold, trait rerolls, APX Coins, essences, and stat chips, checked July 15, 2026.',
    locale,
    pathname: '/codes',
  });
}

function CodeRow({
  item,
  status,
}: { item: (typeof activeCodes)[number]; status: 'Working' | 'Needs check' }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0B1120] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <code className="text-lg font-black text-amber-200">
              {item.code}
            </code>
            <Badge
              className={
                status === 'Working'
                  ? 'bg-emerald-300 text-slate-950'
                  : 'bg-amber-300 text-slate-950'
              }
            >
              {status}
            </Badge>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.reward}</p>
        </div>
        <CodeCopyButton code={item.code} />
      </div>
      {item.notes ? (
        <p className="mt-3 border-white/8 border-t pt-3 text-xs leading-5 text-slate-500">
          {item.notes}
        </p>
      ) : null}
    </div>
  );
}

export default function CodesPage() {
  return (
    <div className="space-y-7 py-5 text-slate-100">
      <header className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,.2),transparent_45%),#0B1120] p-6 md:p-8">
        <Badge className="bg-amber-300 text-slate-950">
          Checked July 15, 2026
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Paradox X Codes
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Copy the exact capitalization and punctuation. Release and
          compensation codes can expire without notice.
        </p>
      </header>
      <section>
        <h2 className="text-2xl font-black">Working codes</h2>
        <div className="mt-4 grid gap-3">
          {activeCodes.map((item) => (
            <CodeRow key={item.code} item={item} status="Working" />
          ))}
        </div>
      </section>
      {needsCheckCodes.length ? (
        <section>
          <h2 className="text-2xl font-black">Needs a live check</h2>
          <p className="mt-2 text-sm text-slate-400">
            Published sources disagree on punctuation, so this is not marked
            guaranteed.
          </p>
          <div className="mt-4 grid gap-3">
            {needsCheckCodes.map((item) => (
              <CodeRow key={item.code} item={item} status="Needs check" />
            ))}
          </div>
        </section>
      ) : null}
      <section className="rounded-xl border border-white/10 bg-[#0B1120] p-6">
        <h2 className="text-2xl font-black">How to redeem</h2>
        <ol className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
          <li>1. Launch the verified Anime Paradox X Roblox experience.</li>
          <li>2. Select the Codes button on the right side of the game UI.</li>
          <li>3. Paste one code with no extra spaces, then press Redeem.</li>
          <li>
            4. If a new code fails, rejoin a current server and try once more.
          </li>
        </ol>
      </section>
      <details className="rounded-xl border border-white/10 bg-[#0B1120] p-5">
        <summary className="cursor-pointer font-bold">
          Expired archive ({expiredCodes.length})
        </summary>
        <div className="mt-4 flex flex-wrap gap-2">
          {expiredCodes.map((item) => (
            <code
              key={item.code}
              className="rounded bg-black/25 px-2 py-1 text-xs text-slate-500"
            >
              {item.code}
            </code>
          ))}
        </div>
      </details>
      <FaqSection
        items={[
          {
            question: 'Are Anime Paradox X codes case-sensitive?',
            answer:
              'Treat them as case-sensitive and copy every exclamation mark exactly.',
          },
          {
            question: 'Why is SORRYFORDELAY marked needs check?',
            answer:
              'Current sources disagree between one and two final exclamation marks.',
          },
          {
            question: 'Where is the Codes button?',
            answer:
              'Current guides place it on the right side of the in-game interface.',
          },
        ]}
      />
    </div>
  );
}
