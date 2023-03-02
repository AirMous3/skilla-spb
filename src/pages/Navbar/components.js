import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: relative;
  background: #091336;
  max-width: 240px;
  min-width: 240px;
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.6);
`;

export const NavLinks = styled.ul``;

export const NavLink = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 52px;

  &:hover {
    background: rgba(216, 228, 251, 0.32);

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 100%;
      background: #005ff8;
    }

    &:after {
      content: '';
      position: absolute;
      right: 22px;
      top: 22px;
      width: 8px;
      height: 8px;
      background: #ffd500;
      box-shadow: 0 3px 8px rgba(237, 218, 1, 0.5);
      border-radius: 50%;
    }
  }
`;

export const NavIcon = styled.div`
  background-image: url(${({ icon }) => icon});
  background-size: 18px 18px;
  height: 18px;
  width: 18px;
  margin-right: 15px;
`;

export const Logo = styled.img`
  margin-top: 23px;
  margin-left: 12px;
  margin-bottom: 32px;
`;
