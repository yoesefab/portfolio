import { EntrySection } from "@/components/entry-section";
import { ProfileCard } from "@/components/profile-card";
import { profile } from "@/data/profile";
import { InlineText } from "@/components/inline-text";

const navigation = [
  { href: "#early-life", label: "Early Life" },
  { href: "#education", label: "Education" },
  { href: "#career", label: "Career" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav id="top" className="site-nav" aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="nav-brand" href="#top">{profile.shortName}</a>
          <ul className="nav-links">{navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul>
        </div>
      </nav>
      <main id="main" className="container content-wrapper">
        <div className="main-content">
          <div className="intro-text">
            {profile.bio.length ? profile.bio.map((paragraph) => <p key={paragraph}><InlineText text={paragraph} /></p>) : (
              <><p><strong>{profile.name}</strong> is based in {profile.location}.</p><p className="placeholder">A short introduction will go here: what I do, what I care about, and what I’m working on.</p></>
            )}
          </div>
          <section id="early-life" aria-labelledby="early-life-heading">
            <h2 id="early-life-heading">Early life</h2>
            {profile.about.map((paragraph) => <p key={paragraph}><InlineText text={paragraph} /></p>)}
          </section>
          <EntrySection id="education" title="Education" entries={profile.education} placeholder="Education details will be added here." />
          <EntrySection id="career" title="Career" intro={profile.careerIntro} entries={profile.experience} placeholder="Work experience and career highlights will be added here." />
        </div>
        <ProfileCard />
      </main>
      <footer className="site-footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    </>
  );
}
