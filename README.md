image or color directive for angular js
===================

An Angular.js directive that will check image is found it will apply the image to dom element else it will fill it with color.


## [Demo](https://plnkr.co/edit/0rILjxDnsytZV0CkuJvF?p=preview)


## How to use
1- installation 
``` 
bower install image-or-color --save
```
2- Add a `<script>` to your `index.html`:

```html
<script src="/path_to_js_file/image_or_color.js"></script>
```
3- Usage

```javascript
var appModule = angular.module('app', ['image-or-color']);
```
```html
<div class="image-or-color" color="black" style="min-width: 300px; height:300px;"  img="https://s18.postimg.org/67va4q0u1/congruent_pentagon.png">
```

4- use directive in html like this

```html
<div class="image-or-color" color="blue" img="image-path"></div> 
<!-- or -->
<div class="image-or-color" color="random" img="image-path"></div> 
```
