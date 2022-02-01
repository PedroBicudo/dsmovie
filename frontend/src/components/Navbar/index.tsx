import ThemeToggler from "components/ThemeToggler/ThemeToggler";
import { Flex } from "styles/layouts/Flex";
import ContactGithub from "../ContactGithub";
import { Nav, NavTitle } from "./styles";

export default function Navbar() {
    return (
      <Nav>
        <Flex justify="space-between" gap={0}>
          <NavTitle>DSMovie</NavTitle>
          <Flex justify="space-between" gap={.5}>
            <ThemeToggler />
            <ContactGithub />
          </Flex>
        </Flex>
      </Nav>
    );
}