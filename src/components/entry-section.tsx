import type { Entry } from "@/data/profile";

export function EntrySection({ id, title, entries, placeholder }: {
  id: string;
  title: string;
  entries: Entry[];
  placeholder: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{title}</h2>
      {entries.length ? entries.map((entry) => (
        <article className="entry" key={`${entry.title}-${entry.period ?? ""}`}>
          <div className="entry-heading">
            <h3>{entry.url ? <a href={entry.url}>{entry.title}</a> : entry.title}</h3>
            {entry.period && <span className="period">{entry.period}</span>}
          </div>
          <p>{entry.description}</p>
        </article>
      )) : <p className="placeholder">{placeholder}</p>}
    </section>
  );
}
