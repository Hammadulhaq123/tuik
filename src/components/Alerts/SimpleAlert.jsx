import React from 'react'

export const SimpleAlert = ({ color, text }) => {
    return (
        <div style={{ color: `${color}` }}>
            Hello {text}
        </div>
    )
}