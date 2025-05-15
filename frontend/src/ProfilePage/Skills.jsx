import './Skills.css'

export default function Skills({ user }) {
  return (
    <div className="skills">
      <div className="skillsheading">
        <p>Skills</p>
      </div>
      <ul>
        {user.skills && user.skills.length > 0 ? (
          user.skills.map((skill, index) => <li key={index}>{skill}</li>)
        ) : (
          <li>No skills listed</li>
        )}
      </ul>
    </div>
  );
}