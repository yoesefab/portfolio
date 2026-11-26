import Image from "next/image";
import { profile } from "@/data/profile";

export function ProfileCard() {
  const nameParts = profile.name.trim().split(/\s+/);
  const initials = [nameParts[0]?.[0], nameParts.length > 1 ? nameParts.at(-1)?.[0] : ""].join("");
  return (
    <aside className="profile-card" aria-label="Profile at a glance">
      <h1>{profile.name}</h1>
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
        <div><dt>Currently</dt><dd>{profile.location}</dd></div>
        <div><dt>Nationality</dt><dd>{profile.nationality || "—"}</dd></div>
        <div><dt>Occupation</dt><dd>{profile.role || "—"}</dd></div>
        <div><dt>Years active</dt><dd>{profile.yearsActive || "—"}</dd></div>
        <div><dt>Known for</dt><dd>{profile.knownFor || "—"}</dd></div>
        <div><dt>Partner</dt><dd>{profile.partner || "—"}</dd></div>
        <div><dt>Interests</dt><dd>{profile.interests.join(", ") || "—"}</dd></div>
        {profile.email && <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>}
      </dl>
    </aside>
  );
}
