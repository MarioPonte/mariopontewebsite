export const sectionInfoAnimation = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

export const techBadgeAnimation = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
}

export const fadeUpAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
}

export const heroAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}