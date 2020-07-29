import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img style={{ borderRadius: 100 }} src="https://media-exp1.licdn.com/dms/image/C4D03AQGOnj2SZn27uQ/profile-displayphoto-shrink_200_200/0?e=1601510400&v=beta&t=EfnMEcrG9FqKFy201dmRvkp3Ym0sDr7FkVRBPrr0tU0" alt="Logo Alura" />
      </a>
      <p>
        Builded with so much love by:
        {' '}
        <a href="https://www.linkedin.com/in/jo%C3%A3o-augusto-colussi-bonassa-9b2690191/" target="_">
          João Augusto Colussi Bonassa
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
