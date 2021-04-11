import * as React from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';

const Header = styled.h1`
  color: tomato;
`;

const Main = (<Header>これはトマト色です</Header>)

render(Main, document.getElementById('app'));