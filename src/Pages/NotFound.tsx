import NotFoundComponent from "src/Components/NotFound";
import CenterOnPage from "../Components/CenterOnPage";

export default function NotFound() {
  return (
    <CenterOnPage>
      <NotFoundComponent
        title="404 - Page Not Found"
        message="Sorry! This page does not exist."
      />
    </CenterOnPage>
  );
}
