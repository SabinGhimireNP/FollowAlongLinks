# FollowAlongLinks

This is a small project, but it will play a bigger part in another big project later on. In this project, we are highlighting the characters/links with a white highlight.

## Working
- All links are selected with `document.querySelectorAll`.
- A span element with the class `highlight` is created virtually (with script).
- A function is triggered on mouseenter.
- We get the dimensions of the element (this) with the help of `this.getBoundingClientRect()`. It gives the height, width, top, left, right, and so on of this element.
- We are also handling the scroll disruption by adding the `.scrollY` value to the top and the `.scrollX` value to the left and giving them to the span element.
