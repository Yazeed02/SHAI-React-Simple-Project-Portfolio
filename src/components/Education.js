import SectionTitle from "./shared/SectionTitle";
import Card from "./shared/Card";

export default function Education() {
  return (
    <section className="py-4 py-md-5 bg-black" id="education">
      <div className="container">
        <SectionTitle>Education</SectionTitle>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <Card
              title="Bachelor's Degree in Computer Science"
              subtitle="Middle East University | Amman, Jordan"
              date="January 2021 - September 2024"
              badgeText="GPA: 3.74/4.0"
              badgeColor="darkred"
              className="bg-dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
