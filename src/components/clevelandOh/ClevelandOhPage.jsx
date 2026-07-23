import { useEffect } from "react";
import ClevelandOhBreadcrumbs from "./ClevelandOhBreadcrumbs";
import ClevelandOhFAQ from "./ClevelandOhFAQ";
import ClevelandOhHero from "./ClevelandOhHero";
import ClevelandOhHowItWorks from "./ClevelandOhHowItWorks";
import ClevelandOhLookingForCity from "./ClevelandOhLookingForCity";
import ClevelandOhOnTheGround from "./ClevelandOhOnTheGround";
import ClevelandOhReadyToRun from "./ClevelandOhReadyToRun";
import ClevelandOhShowcase from "./ClevelandOhShowcase";
import ClevelandOhTellUsAboutCampaign from "./ClevelandOhTellUsAboutCampaign";
import ClevelandOhWhereOurCleveland from "./ClevelandOhWhereOurCleveland";

export default function ClevelandOhPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Cleveland Influencer Marketing Agency | SocialMelo";

    let description = document.querySelector('meta[name="description"]');
    const createdDesc = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const prevDesc = description.content;
    description.content =
      "Grow your brand with a Cleveland influencer marketing agency. Connect with local creators, run authentic campaigns, and reach audiences that matter.";

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
      <ClevelandOhBreadcrumbs />
      <ClevelandOhHero />
      <ClevelandOhShowcase />
      <ClevelandOhOnTheGround />
      <ClevelandOhWhereOurCleveland />
      <ClevelandOhHowItWorks />
      <ClevelandOhFAQ />
      <ClevelandOhLookingForCity />
      <ClevelandOhReadyToRun />
      <ClevelandOhTellUsAboutCampaign />
    </>
  );
}
