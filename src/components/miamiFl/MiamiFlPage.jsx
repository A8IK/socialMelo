import { useEffect } from "react";
import MiamiFlBreadcrumbs from "./MiamiFlBreadcrumbs";
import MiamiFlFAQ from "./MiamiFlFAQ";
import MiamiFlHero from "./MiamiFlHero";
import MiamiFlHowItWorks from "./MiamiFlHowItWorks";
import MiamiFlLookingForCity from "./MiamiFlLookingForCity";
import MiamiFlOnTheGround from "./MiamiFlOnTheGround";
import MiamiFlReadyToRun from "./MiamiFlReadyToRun";
import MiamiFlShowcase from "./MiamiFlShowcase";
import MiamiFlTellUsAboutCampaign from "./MiamiFlTellUsAboutCampaign";
import MiamiFlWhereOurMiami from "./MiamiFlWhereOurMiami";

export default function MiamiFlMiamiFlPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Miami Influencer Marketing Agency | SocialMelo";

    let description = document.querySelector('meta[name="description"]');
    const createdDesc = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const prevDesc = description.content;
    description.content =
      "Partner with a Miami influencer marketing agency to connect with local influencers, create authentic campaigns, and maximize your brand's reach.";

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
      <MiamiFlBreadcrumbs />
      <MiamiFlHero />
      <MiamiFlShowcase />
      <MiamiFlOnTheGround />
      <MiamiFlWhereOurMiami />
      <MiamiFlHowItWorks />
      <MiamiFlFAQ />
      <MiamiFlLookingForCity />
      <MiamiFlReadyToRun />
      <MiamiFlTellUsAboutCampaign />
    </>
  );
}
