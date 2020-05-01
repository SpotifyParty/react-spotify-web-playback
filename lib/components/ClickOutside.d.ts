import * as React from 'react';
interface IProps {
    onClick: () => any;
}
export default class ClickOutside extends React.PureComponent<IProps> {
    public componentDidMount(): void;
    public componentWillUnmount(): void;
    public render(): JSX.Element;
    private container;
    private isTouch;
    private handle;
    private setRef;
    constructor(props: IProps);
}
export {};
