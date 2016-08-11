# Easy Navigation Bar using Jquery 
A simple SPA using Jquery and plain HTML. The page consists of a navigation bar that will show and hide the tabs that you have defined in HTML dynamically

### How do I add my tabs?

Adding a new tab consits of 2 steps  
Add a new *li* element to the nav tree as follows
```html
<li class="inactive" id="nav-*your tab memo(e.g. home, about, contact e.t.c)*"><a>*The tab title here*</a></li>
```  
Add a new div with the *tab* class and add your content inside
```html
<div  class="tab" id="*your tab meme*">

</div>
```
Keep in mind that you should use the same memo in the id of the div as the one you used in the *li* element


[Live Demo](http://codepen.io/KostasPelelis/pen/jAXZVx)
