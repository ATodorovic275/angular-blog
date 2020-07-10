import { trigger, transition, style, animate } from '@angular/animations';


export let slide = trigger("slide", [
    transition(":enter", [
        style({ transform: "scale(1)" }),
        animate(500)
    ])
])