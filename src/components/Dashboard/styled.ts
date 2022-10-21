import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 55px;

  border-bottom: 1px solid var(--grey-3);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    max-width: 80%;
    height: 40px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 120px;

  border-bottom: 1px solid var(--grey-3);

  .boxHeaderMain {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    max-width: 80%;
    height: 100%;

    @media (max-width: 700px) {
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 25px;
    }
  }
`;

export const BoxHeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;

  width: 80%;
`;

export const UlMain = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  background: #000000;
  background: linear-gradient(to right, #4a1712, #320d0d, #1c0909 40%, #000000);
  background: -webkit-linear-gradient(
    to right,
    #4a1712,
    #320d0d,
    #1c0909 40%,
    #000000
  );
  border-radius: 0.15rem;

  padding: 15px;
  margin-top: 25px;

  width: 80%;
  height: 350px;
`;
