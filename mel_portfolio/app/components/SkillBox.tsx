export default function SkillBox({ title, skills }: { title: string, skills: string[] }) {
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  