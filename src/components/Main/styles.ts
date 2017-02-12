import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  max-width: 1440px;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  #tsparticles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px) {
    padding: 0 4rem;
  }

  @media (max-width: 360px) {
    padding: 0 2rem;
  }
`;
