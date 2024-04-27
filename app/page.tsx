import ExperienceAndEducation from '@/components/custom/experience-and-education';
import PersonalInfo from '@/components/custom/personal-info';
import { TracingBeam } from '@/components/ui/tracing-beam';

export default function Home() {
  return (
    <TracingBeam>
    <main>
      <PersonalInfo />
      <ExperienceAndEducation />
    </main>
    </TracingBeam>
  );
}
