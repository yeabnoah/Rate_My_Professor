import React from "react";

type HomePageContent = { title: string; description: string }[];

const Features = () => {
  const homepageContent: HomePageContent = [
    {
      title: "Discover Insights",
      description:
        "Browse reviews and ratings to find detailed insights about professors and lecturers.",
    },
    {
      title: "Share Your Experience",
      description:
        "Share your experiences and help others make informed decisions.",
    },
    {
      title: "Community Driven",
      description:
        "Our community-driven platform ensures authenticity and fairness in every review.",
    },
  ];

  return (
    <ul className=" mt-10">
      {homepageContent.map((each, idx) => {
        return (
          <li key={idx} className="">
            <h2 className=" text-lg underline-offset-4 text-green-400 underline">
              {each.title}
            </h2>
            <p className=" mt-1 text-sm md:text-base">{each.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Features;
