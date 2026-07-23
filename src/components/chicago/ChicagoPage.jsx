import { useEffect } from "react";
import ChicagoBreadcrumbs from "./ChicagoBreadcrumbs";
import ChicagoFAQ from "./ChicagoFAQ";
import ChicagoHero from "./ChicagoHero";
import ChicagoHowItWorks from "./ChicagoHowItWorks";
import ChicagoLookingForCity from "./ChicagoLookingForCity";
import ChicagoOnTheGround from "./ChicagoOnTheGround";
import ChicagoReadyToRun from "./ChicagoReadyToRun";
import ChicagoShowcase from "./ChicagoShowcase";
import ChicagoTellUsAboutCampaign from "./ChicagoTellUsAboutCampaign";
import ChicagoWhereOurChicago from "./ChicagoWhereOurChicago";

export default function ChicagoChicagoPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Chicago Influencer Marketing Agency | SocialMelo";

    let description = document.querySelector('meta[name="description"]');
    const createdDesc = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const prevDesc = description.content;
    description.content =
      "Scale your brand with a Chicago influencer marketing agency. Work with trusted creators and execute influencer campaigns that deliver real business results.";

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
      <ChicagoBreadcrumbs />
      <ChicagoHero />
      <ChicagoShowcase />
      <ChicagoOnTheGround />
      <ChicagoWhereOurChicago />
      <ChicagoHowItWorks />
      <ChicagoFAQ />
      <ChicagoLookingForCity />
      <ChicagoReadyToRun />
      <ChicagoTellUsAboutCampaign />
    </>
  );
}
