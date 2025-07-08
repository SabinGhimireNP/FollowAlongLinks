# FollowAlongLinks

This is a small project but it will play a bigger part in another big project later on. In this project we are highlighing the characters/links with a white hightlights.

## Working

- all links are selected with `document.querySelectorAll`.
- Span element with class hightlight is created virtually (with script).
- a function is triggered on mouseenter.
- we get the dimensions of the element(this) with the help of `this.getBoundingClientRect()` it gives height, width, top, left, right and so on of this element.
- we are also handeling the scroll distruption by adding `.scrollY` value to the top and `.scrollX` value to the left and is given to the span elemnent.
