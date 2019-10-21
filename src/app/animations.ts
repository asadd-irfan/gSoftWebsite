import { trigger, style, animate, transition } from "@angular/animations";

export const fadeInOut = trigger("fadeInOutAnimation", [
  transition("*=>allState", [
    style({
      opacity: "0",
      backgroundColor: "orange",
      transform: "skewY(70deg) translate(70px, 70px)"
    }),
    animate("300ms")
  ]),
  transition("*=>appState", [
    style({
      opacity: "0",
      backgroundColor: "orange",
      transform: "skewY(70deg) translate(70px, 70px)"
    }),
    animate("300ms")
  ]),
  transition("*=>webState", [
    style({
      opacity: "0",
      backgroundColor: "orange",
      transform: "skewY(70deg) translate(70px, 70px)"
    }),
    animate("300ms")
  ])
]);

export const modalAnimation = trigger("modalAnimation", [
  transition("*=>modalState", [
    style({
      opacity: "0",
      backgroundColor: "red"
    }),
    animate("500ms")
  ])
]);
