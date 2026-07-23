import { useEffect } from "react";
import KansasCityKsBreadcrumbs from "./KansasCityKsBreadcrumbs";
import KansasCityKsFAQ from "./KansasCityKsFAQ";
import KansasCityKsHero from "./KansasCityKsHero";
import KansasCityKsHowItWorks from "./KansasCityKsHowItWorks";
import KansasCityKsLookingForCity from "./KansasCityKsLookingForCity";
import KansasCityKsOnTheGround from "./KansasCityKsOnTheGround";
import KansasCityKsReadyToRun from "./KansasCityKsReadyToRun";
import KansasCityKsShowcase from "./KansasCityKsShowcase";
import KansasCityKsTellUsAboutCampaign from "./KansasCityKsTellUsAboutCampaign";
import KansasCityKsWhereOurKCK from "./KansasCityKsWhereOurKCK";

export default function KansasCityKsPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Kansas City Influencer Marketing Agency | SocialMelo";

    let description = document.querySelector('meta[name="description"]');
    const createdDesc = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const prevDesc = description.content;
    description.content =
      "Launch impactful influencer campaigns with a Kansas City influencer marketing agency. Find vetted creators and manage campaigns from strategy to reporting.";

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
      <KansasCityKsBreadcrumbs />
      <KansasCityKsHero />
      <KansasCityKsShowcase />
      <KansasCityKsOnTheGround />
      <KansasCityKsWhereOurKCK />
      <KansasCityKsHowItWorks />
      <KansasCityKsFAQ />
      <KansasCityKsLookingForCity />
      <KansasCityKsReadyToRun />
      <KansasCityKsTellUsAboutCampaign />
    </>
  );
}
