import { useEffect } from "react";
import LosAngelesBreadcrumbs from "./LosAngelesBreadcrumbs";
import LosAngelesFAQ from "./LosAngelesFAQ";
import LosAngelesHero from "./LosAngelesHero";
import LosAngelesHowItWorks from "./LosAngelesHowItWorks";
import LosAngelesLookingForCity from "./LosAngelesLookingForCity";
import LosAngelesOnTheGround from "./LosAngelesOnTheGround";
import LosAngelesReadyToRun from "./LosAngelesReadyToRun";
import LosAngelesShowcase from "./LosAngelesShowcase";
import LosAngelesTellUsAboutCampaign from "./LosAngelesTellUsAboutCampaign";
import LosAngelesWhereOurLA from "./LosAngelesWhereOurLA";

export default function LosAngelesPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Los Angeles Influencer Marketing Agency | SocialMelo";

    let description = document.querySelector('meta[name="description"]');
    const createdDesc = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const prevDesc = description.content;
    description.content =
      "Work with a Los Angeles influencer marketing agency trusted by brands. Discover vetted creators, manage campaigns, and drive measurable results across LA.";

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
      <LosAngelesBreadcrumbs />
      <LosAngelesHero />
      <LosAngelesShowcase />
      <LosAngelesOnTheGround />
      {/* <LosAngelesWhereOurLA /> */}
      <LosAngelesHowItWorks />
      <LosAngelesFAQ />
      <LosAngelesLookingForCity />
      <LosAngelesReadyToRun />
      <LosAngelesTellUsAboutCampaign />
    </>
  );
}
