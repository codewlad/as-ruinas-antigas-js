import styled from 'styled-components';

import char01 from '@assets/char-01.png'; 

export const Character = styled.div`
    min-width: 48px; /* Largura do quadro do personagem */
    min-height: 48px; /* Altura do quadro do personagem */
    background-image: url(${char01});
    background-size: 144px 192px; /* Largura total x Altura total do sprite sheet */
    position: absolute;
    z-index: 10;
`