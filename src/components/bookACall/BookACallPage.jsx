import { useEffect } from "react";
import BookACallBeforeYouBook from "./BookACallBeforeYouBook";
import BookACallBreadcrumb from "./BookACallBreadcrumb";
import BookACallHero from "./BookACallHero";
import BookACallPreferToSend from "./BookACallPreferToSend";
import BookACallWhatWillCover from "./BookACallWhatWillCover";

export default function BookACallPage() {
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
      <BookACallBreadcrumb />
      <BookACallHero />
      <BookACallWhatWillCover />
      <BookACallBeforeYouBook />
      <BookACallPreferToSend />
    </>
  );
}
