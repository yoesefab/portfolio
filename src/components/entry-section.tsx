import type { Entry } from "@/data/profile";
import { InlineText } from "@/components/inline-text";

export function EntrySection({ id, title, entries, placeholder, intro = [] }: {
  id: string;
  title: string;
  entries: Entry[];
  placeholder: string;
  intro?: string[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{title}</h2>
      {intro.length > 0 && <div className="section-intro">{intro.map((paragraph) => <p key={paragraph}><InlineText text={paragraph} /></p>)}</div>}
      {entries.length ? entries.map((entry) => (
        <article className="entry" key={`${entry.title}-${entry.period ?? ""}`}>
          <div className="entry-heading">
            <h3>{entry.url ? <a href={entry.url}>{entry.title}</a> : entry.title}</h3>
            {entry.period && <span className="period">{entry.period}</span>}
          </div>
          {(Array.isArray(entry.description) ? entry.description : [entry.description]).map((paragraph) => <p key={paragraph}><InlineText text={paragraph} /></p>)}
        </article>
      )) : <p className="placeholder">{placeholder}</p>}
    </section>
  );
}
