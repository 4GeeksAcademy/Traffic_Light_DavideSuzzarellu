import React from "react";

export const Circle = ({ color, onClick, isOn }) => {
    return (
        <article
            onClick={() => onClick(color)}
            className={`circle ${isOn ? color : ""}`}
        ></article>
    );
};