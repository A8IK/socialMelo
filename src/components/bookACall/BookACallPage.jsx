import BookACallBeforeYouBook from "./BookACallBeforeYouBook";
import BookACallBreadcrumb from "./BookACallBreadcrumb";
import BookACallHero from "./BookACallHero";
import BookACallPreferToSend from "./BookACallPreferToSend";
import BookACallWhatWillCover from "./BookACallWhatWillCover";

export default function BookACallPage() {
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
