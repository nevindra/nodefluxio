import React from "react";

export interface HeroProps {
    title?: React.ReactNode;
    description?: string;
    videoSrc?: string;
    image?: string | any;
    primaryCtaText?: string;
    primaryCtaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    label?: string;
    features?: string[];
}
