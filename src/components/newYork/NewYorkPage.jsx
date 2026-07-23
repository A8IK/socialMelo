import { useEffect } from "react";
import NewWorkHero from "./NewWorkHero";
import NewYorkBreadcrumbs from "./NewYorkBreadcrumbs";
import NewYorkFAQ from "./NewYorkFAQ";
import NewYorkHowItWorks from "./NewYorkHowItWorks";
import NewYorkLookingForCity from "./NewYorkLookingForCity";
import NewYorkOnTheGround from "./NewYorkOnTheGround";
import NewYorkReadyToRun from "./NewYorkReadyToRun";
import NewYorkShowcase from "./NewYorkShowcase";
import NewYorkTellUsAboutCampaign from "./NewYorkTellUsAboutCampaign";

export default function NewYorkPage() {
  useEffect(() => {
    // Title
    const prevTitle = document.title;
    document.title = "New York Influencer Marketing Agency | SocialMelo";

    // Description
    let description = document.querySelector('meta[name="description"]');
    const createdDesc = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const prevDesc = description.content;
    description.content =
      "Partner with a leading New York influencer marketing agency. Access 850+ vetted NYC creators and launch high-performing influencer campaigns with expert strategy and management.";

    // Robots
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      document.title = prevTitle;
      if (createdDesc) description.remove();
      else description.content = prevDesc;
      robots.remove();
    };
  }, []);

  return (
    <>
      <NewYorkBreadcrumbs />
      <NewWorkHero />
      <NewYorkShowcase />
      <NewYorkOnTheGround />
      {/* <NewYorkWhereOurNYC /> */}
      <NewYorkHowItWorks />
      <NewYorkFAQ />
      <NewYorkLookingForCity />
      <NewYorkReadyToRun />
      <NewYorkTellUsAboutCampaign />
    </>
  );
}
