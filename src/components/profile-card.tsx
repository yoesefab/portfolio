import Image from "next/image";
import { profile } from "@/data/profile";

export function ProfileCard() {
  const nameParts = profile.name.trim().split(/\s+/);
  const initials = [nameParts[0]?.[0], nameParts.length > 1 ? nameParts.at(-1)?.[0] : ""].join("");
  return (
    <aside className="profile-card" aria-label="Profile at a glance">
      <h2>{profile.name}</h2>
      <figure>
        {profile.photo ? (
          <Image className="portrait" src={profile.photo} alt={profile.name} width={600} height={660} priority />
        ) : (
          <div className="portrait portrait-placeholder" role="img" aria-label="Profile photo not yet added">
            <span>{initials}</span>
            <span className="portrait-label">Portrait to come</span>
          </div>
        )}
        <figcaption>{profile.photoCaption || profile.location}</figcaption>
      </figure>
      <dl className="profile-details">
        <div><dt>Based in</dt><dd>{profile.location}</dd></div>
        {profile.role && <div><dt>Occupation</dt><dd>{profile.role}</dd></div>}
        {profile.education.length > 0 && <div><dt>Education</dt><dd>{profile.education.map((item) => item.title).join(" · ")}</dd></div>}
        {profile.interests.length > 0 && <div><dt>Interests</dt><dd>{profile.interests.join(", ")}</dd></div>}
        {profile.email && <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>}
        {profile.links.length > 0 && <div><dt>Elsewhere</dt><dd className="social-links">{profile.links.map((link) => <a key={link.url} href={link.url}>{link.label} <span aria-hidden="true">↗</span></a>)}</dd></div>}
      </dl>
      <a className="profile-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
    </aside>
  );
}
