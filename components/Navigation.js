import Link from "next/link";
import styled from "styled-components";

export const Navigation = (props) => {
  return (
    <Header {...props}>
      <div>
        <Link href="/">Accueil</Link>
        <Link href="/cards">Cards</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/mentions">Mentions Légales</Link>
      </div>
    </Header>
  );
};
export default Navigation;

const Header = styled.div`
  height: 80px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.04);
  font-weight: 500;

  > div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
  }
    a {
      padding: 10px 40px;
      text-decoration: none;
      &.active {
        color: hsla(225, 51%, 39%);
      }
    }
`;
