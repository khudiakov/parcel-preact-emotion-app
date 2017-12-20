import {h, render} from 'preact';
import styled from 'preact-emotion';

const StyledSpan = styled.span`
    color: red;
`;

render((
    <div id="root">
        <StyledSpan>Hello World!</StyledSpan>
    </div>
), document.body);