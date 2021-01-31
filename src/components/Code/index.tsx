import React, { forwardRef, Ref } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import BaseElement from '~/elements/BaseElement';
import { Smart } from '~/index';
import { debugRef } from '~/util';

export interface CodeProps {
  children: string;
  debug?: boolean;
}

const Code = forwardRef<BaseElement, CodeProps>(
  (props: CodeProps, forwardedRef: Ref<BaseElement>) => {
    const { children, debug } = props;
    const mergedRef = useMergedRef<any>(forwardedRef, debugRef(debug));
    return <Smart code={children} ref={mergedRef} />;
  }
);

Code.defaultProps = {
  debug: false
};

export default Code;
