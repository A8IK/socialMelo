import { useEffect } from "react";
import ServiceCoreBrands from "./ServiceCoreBrands";
import ServiceCoreDifference from "./ServiceCoreDifference";
import ServiceCoreFaq from "./ServiceCoreFaq";
import ServiceCoreFeaturedVerticals from "./ServiceCoreFeaturedVerticals";
import ServiceCoreHero from "./ServiceCoreHero";
import ServiceCoreHowWeWork from "./ServiceCoreHowWeWork";
import ServiceCoreOurServices from "./ServiceCoreOurServices";
import ServiceCoreReadyToRun from "./ServiceCoreReadyToRun";
import ServiceCoreSpecialization from "./ServiceCoreSpecialization";
import ServicveCoreTellUsAboutCampaign from "./ServicveCoreTellUsAboutCampaign";

export default function ServiceCorePage() {
  useEffect(() => {
    const ogImageUrl = `${window.location.origin}/Socialmelo-for-Brands-and-Creators.jpg`;

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    let ogImage = document.querySelector('meta[property="og:image"]');
    const ogImageCreated = !ogImage;
    const previousOgImage = ogImage?.getAttribute("content");
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", ogImageUrl);

    return () => {
      robots.remove();
      if (ogImageCreated) {
        ogImage.remove();
      } else if (previousOgImage != null) {
        ogImage.setAttribute("content", previousOgImage);
      }
    };
  }, []);

  return (
    <>
      <ServiceCoreHero />
      <ServiceCoreSpecialization />
      <ServiceCoreOurServices />
      <ServiceCoreBrands />
      <ServiceCoreDifference />
      <ServiceCoreHowWeWork />
      <ServiceCoreFeaturedVerticals />
      <ServiceCoreFaq />
      <ServiceCoreReadyToRun />
      <ServicveCoreTellUsAboutCampaign />
    </>
  );
}
