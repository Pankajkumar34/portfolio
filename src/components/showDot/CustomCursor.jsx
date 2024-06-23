"use client"
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const dot = dotRef.current;
            if (dot) {
                dot.style.left = `${event.clientX - 15}px`;
                dot.style.top = `${event.clientY - 15}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <span className="cs_cursor_sm fixed z-[99999] text-white" ref={dotRef}></span>;
};

export default CustomCursor;
