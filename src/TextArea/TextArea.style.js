import tw, { styled } from 'twin.macro';

const defaultTextAreaStyle = tw`
    bg-adp-input
    border
    border-solid
    border-adp-input-border
    text-sm
    text-adp-input-text-with-value
    p-5
    rounded

    disabled:bg-adp-input-disabled

    focus:border-adp-input-focus-border
    focus:shadow-adpInputFocus    
`;

const TextAreaType = () => [defaultTextAreaStyle];
const StyledTextArea = styled.textarea(() => [TextAreaType]);

export default StyledTextArea;
