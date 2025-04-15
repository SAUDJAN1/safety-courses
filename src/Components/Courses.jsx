import CourseCard from "./CourseCard";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "OSHA Workplace Safety",
      description:
        "Comprehensive training on workplace safety standards and regulations.",
      level: "Beginner",
      image:
        "https://www.oshaoutreachcourses.com/blog/wp-content/uploads/2023/05/iStock-2040347947-450x300.webp",
    },
    {
      id: 2,
      title: "Fire Safety & Prevention",
      description:
        "Learn fire prevention techniques and emergency response procedures.",
      level: "Intermediate",
      image:
        "https://plus.unsplash.com/premium_photo-1661490162121-41df314e1ef1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlyZSUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3",
    },
    {
      id: 3,
      title: "First Aid & CPR Certification",
      description:
        "Essential first aid skills and CPR techniques for emergencies.",
      level: "Beginner",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3egCeU83jBiGAnoIctcCITc03jWeFUpY0g&s",
    },
    {
      id: 4,
      title: "Construction Site Safety",
      description: "Specialized safety training for construction environments.",
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    },
    {
      id: 5,
      title: "Electrical Safety Training",
      description:
        "Safe work practices for electrical equipment and installations.",
      level: "Intermediate",
      image:
        "https://yourpowerpro.com/wp-content/uploads/2024/06/workplace-electrical-safety-training-programs.jpg",
    },
    {
      id: 6,
      title: "Hazardous Materials Handling",
      description:
        "Proper procedures for handling and storing dangerous chemicals.",
      level: "Intermediate",
      image:
        "https://blog.idrenvironmental.com/hs-fs/hubfs/images/handling_hazardous_waste.jpg?width=400&name=handling_hazardous_waste.jpg",
    },
    {
      id: 7,
      title: "Confined Space Entry",
      description: "Safety protocols for working in confined spaces.",
      level: "Advanced",
      image:
        "https://www.greenwgroup.com/wp-content/uploads/2023/11/Entry-1.png",
    },
    {
      id: 8,
      title: "Fall Protection Training",
      description: "Prevention and protection against fall hazards.",
      level: "Intermediate",
      image:
        "https://amazeforklifttraining.com/wp-content/uploads/2023/05/fall-protection-training.jpeg",
    },
    {
      id: 9,
      title: "Forklift Operator Safety",
      description:
        "Certification for safe operation of forklifts and industrial trucks.",
      level: "Beginner",
      image:
        "https://www.sprintdriving.com/wp-content/uploads/2018/05/Forklift-Operator-Safety-Training.jpg",
    },
    {
      id: 10,
      title: "Emergency Evacuation Procedures",
      description: "Planning and executing safe building evacuations.",
      level: "Beginner",
      image:
        "https://reliablefire.com/wp-content/uploads/2022/03/emergency-evacuation-drill-training-1544164517-1360246.jpeg",
    },
    {
      id: 11,
      title: "Machine Guarding Safety",
      description: "Protection from machine-related hazards.",
      level: "Intermediate",
      image:
        "https://techehs.com/wp-content/uploads/2024/01/Untitled-3-1024x512-1.jpg",
    },
    {
      id: 12,
      title: "Heat Stress Prevention",
      description: "Recognizing and preventing heat-related illnesses.",
      level: "Beginner",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJsPKzyYJ_gCJibutamxzx6CYmMi3Y50AWQ&s",
    },
    {
      id: 13,
      title: "Cold Weather Safety",
      description: "Protecting workers in extreme cold environments.",
      level: "Beginner",
      image:
        "https://www.shutterstock.com/image-vector/cold-weather-winter-safety-tips-600nw-2396733375.jpg",
    },
    {
      id: 14,
      title: "Respiratory Protection",
      description: "Proper use of respirators and breathing apparatus.",
      level: "Intermediate",
      image:
        "https://www.safetystratus.com/wp-content/uploads/2023/09/Picture1-4.jpg",
    },
    {
      id: 15,
      title: "Noise and Hearing Conservation",
      description: "Protecting against occupational hearing loss.",
      level: "Beginner",
      image:
        "https://jta.com.au/sites/default/files/occupational-noise-assessments.jpg",
    },
    {
      id: 16,
      title: "Scaffolding Safety",
      description: "Safe erection and use of scaffolding systems.",
      level: "Advanced",
      image: "https://www.daibau.ng/showfile.php?id=10101",
    },
    {
      id: 17,
      title: "Crane and Rigging Safety",
      description: "Safe operation of cranes and rigging equipment.",
      level: "Advanced",
      image:
        "https://nesscampbell.com/wp-content/uploads/PRPkfTOjaWA9MTgjBwmlYwyxqzQfdzFn1585761673-2.jpg",
    },
    {
      id: 18,
      title: "Trenching and Excavation Safety",
      description: "Preventing cave-ins and excavation hazards.",
      level: "Intermediate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcjlAEU-sYO0_m994K5oSU51xGQw8eNhdbw&s",
    },
    {
      id: 19,
      title: "Bloodborne Pathogens",
      description: "Protection against exposure to bloodborne diseases.",
      level: "Beginner",
      image:
        "https://www.oshatrainingschool.com/images/Bloodborne%20graph.webp",
    },
    {
      id: 20,
      title: "Lockout/Tagout Procedures",
      description: "Controlling hazardous energy during maintenance.",
      level: "Intermediate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqYhh6E4zM57oresdogPpbUgbn4YzXF3Lqw&s",
    },
    {
      id: 21,
      title:
        "NEBOSH National General Certificate in Occupational Health and Safety",
      description:
        "A foundational health and safety qualification covering risk management, workplace hazards, and UK legislation. Meets the requirements for Technician membership (TechIOSH) of IOSH.",
      level: "Intermediate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YhqcsPUWES1zNQ2Sh5Nzcu8naaeFV79U6g&s",
    },
  ];

  return (
    <section id="courses" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Safety Courses
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose from our wide range of certified safety training programs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
