// "use client";
//
// import {motion} from "framer-motion";
// import {useInView} from "react-intersection-observer";
// import {ReactNode} from "react";
//
// type Direction = "top" | "bottom" | "left" | "right" | "zoom" | "fade" | "blur";
//
// const getInitial = (direction: Direction) => {
//     switch (direction) {
//         case "top":
//             return {y: -80, opacity: 0};
//         case "bottom":
//             return {y: 80, opacity: 0};
//         case "left":
//             return {x: -80, opacity: 0};
//         case "right":
//             return {x: 80, opacity: 0};
//         case "zoom":
//             return {scale: 0.8, opacity: 0};
//         case "blur":
//             return {opacity: 0, filter: "blur(10px)"};
//         default:
//             return {opacity: 0};
//     }
// };
//
// const getAnimate = (direction: Direction) => {
//     switch (direction) {
//         case "blur":
//             return {opacity: 1, filter: "blur(0px)"};
//         case "zoom":
//             return {scale: 1, opacity: 1};
//         default:
//             return {x: 0, y: 0, opacity: 1};
//     }
// };
//
// const ScrollAnimation = (
//     {
//         children,
//         direction = "bottom",
//         className = "",
//     }: {
//         children: ReactNode;
//         direction?: Direction;
//         className?: string;
//     }) => {
//     const {ref, inView} = useInView({triggerOnce: true, threshold: 0.2});
//
//     return (
//         <motion.div
//             ref={ref}
//             initial={getInitial(direction)}
//             animate={inView ? getAnimate(direction) : {}}
//             transition={{duration: 0.8, ease: "easeOut"}}
//             className={className}
//         >
//             {children}
//         </motion.div>
//     );
// };
//
// export default ScrollAnimation;
