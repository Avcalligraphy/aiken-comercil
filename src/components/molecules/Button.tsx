import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
    text: string,
    bg?: string
}
export default function Button(props: Partial<ButtonProps>) {
    const { text, bg = "bg-[#7A54B7]", ...nativeProps } = props;
  return (
    <button
      className={`${bg} translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 rounded-[41px] text-white cmd:py-[14px] py-[12px] font-medium text-[13px] `}
      {...nativeProps}
    >
      {text}
    </button>
  );
}
