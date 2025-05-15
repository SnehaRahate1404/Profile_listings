import Name from "./Name";
import Skills from "./Skills";

export default function InfoSection({ user }) {
  return (
    <div className="info">
      <Name user={user} />
      <Skills user={user} />
    </div>
  )
}