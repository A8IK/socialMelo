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
import NewYorkWhereOurNYC from "./NewYorkWhereOurNYC";

export default function NewYorkPage() {
  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      robots.remove();
    };
  }, []);

  return (
    <>
      <NewYorkBreadcrumbs />
      <NewWorkHero />
      <NewYorkShowcase />
      <NewYorkOnTheGround />
      <NewYorkWhereOurNYC />
      <NewYorkHowItWorks />
      <NewYorkFAQ />
      <NewYorkLookingForCity />
      <NewYorkReadyToRun />
      <NewYorkTellUsAboutCampaign />
    </>
  );
}
