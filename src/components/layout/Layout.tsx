import { Container } from "../ui/Container";
import Header from "./Header";
import Main from "./Main";

export default function Layout() {
  return (
    <Container maxWidth="xl" padding="24px">
      <Header />
      <Main />
    </Container>
  );
}
