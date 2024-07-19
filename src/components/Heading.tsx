import React from 'react';

type HeadingProps = {
    children: React.ReactNode
}

export const Heading = (props: HeadingProps) => {
    return <h1>{props.children}</h1>
}