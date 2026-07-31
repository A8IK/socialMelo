import { useEffect } from "react";
import BookACallBeforeYouBook from "./BookACallBeforeYouBook";
import BookACallBreadcrumb from "./BookACallBreadcrumb";
import BookACallHero from "./BookACallHero";
import BookACallPreferToSend from "./BookACallPreferToSend";
import BookACallWhatWillCover from "./BookACallWhatWillCover";

export default function BookACallPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Free Influencer Marketing Strategy Call | SocialMelo";

    let description = document.querySelector('meta[name="description"]');
    const createdDesc = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const prevDesc = description.content;
    description.content =
      "Talk with influencer marketing experts about your campaign goals. Get creator recommendations, realistic budgets, and a personalized growth plan.";

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
      <BookACallBreadcrumb />
      <BookACallHero />
      <BookACallWhatWillCover />
      <BookACallBeforeYouBook />
      <BookACallPreferToSend />
    </>
  );
}
