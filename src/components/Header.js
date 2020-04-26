import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.h1`
	text-align: center;
	margin-bottom: 2rem;
`

const Header = (props) => {
	return <MainHeader>{props.children}</MainHeader>;
};

export default Header;
