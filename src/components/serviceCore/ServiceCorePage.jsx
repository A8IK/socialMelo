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
