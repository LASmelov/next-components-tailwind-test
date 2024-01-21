import React from 'react';

export default function Button(props) {
  return (
    <button className="p-6 text-lg text-slate-950 font-normal  hover:text-orange-500 transition-all">
      {props.text}
    </button>
  );
}
