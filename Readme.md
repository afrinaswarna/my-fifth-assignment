## Answer to the question no. 1:
 *The main difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll** are:*

**getElementById**
- Method of javascript that select a single dom element By its unique id attribute.
- Every dom element that have id attribute must be different from one another.
- This method returns a single dom element or null if there is no element available in the dom.

**getElementsByClassName**
- Method of javascript that select all elements that have a specific class name.
- It returns an HTMLCollection which is an array like object but not an array.We can able to do some specific work like array looping and indexing of the elements.But we can not push or pop the element.
- This method  automatically update the  reflect changes in dom.That means these collections are live

**querySelectorAll**
- Method of javascript that select all elements that are matched with css selectors mentioned within the parentheses() 
- It returns a NodeList which is also an array like object but not an array. We also get each element by looping that nodeList.
- The NodeList is static . That means it do not update automatically if the DOM changes after the collection is retrieved.


---

## Answer to the question no. 2:
**The process of create and insert an element into the DOM is described below step by step:**

1. Create a new element :
create a new HTML element using the *document.createElement()* method. This method takes the tag name of the element as a string argument.

2. Add some content or attribute :
we can set innerText Or innerHtML in these step.we can also setAttribute or add or remove classList in these step.

3. Selection of parent element:
In these step we have to select an existing DOM element where we want to insert the new element created. For selection of the parent element we can use *document.getElementById()* or *document.querySelector()* or *document.getElementsByTagName()* methods.

4. Insert the new element within the parent element:
using *appendChild()* method on the parent element that newly created element can be added in the DOM.

---

## Answer to the question no. 3:
**Event bubbling**
It is a default javascript event propagation mechanism. When an event occur such as a click , the event first triggers on the innermost target element and than propagates upward through to its parent elements to the document root.It is one of the ways of events are handled in the browser.It allows the parent elements to response the events that are originally occurred on their chile elements.
**How Event Bubbling Works**
1. Firstly an event like click is triggered the innermost element which is the target of the event.The event is handled by the target element itself .
2. The event than propagates to its parents and than its grandParents. By these way the event travels from the target element to the root of the document of the DOM tree.
3. If any of those ancestors have event listeners, those listeners will also be executed in the traveling process.
4. For example,  if i click a button inside a div, the click event will first be handled by the button, then by the div, and finally by the body element. 

---
## Answer to the question no. 4:
**Event Delegation**
Event delegation is a technique for handling events efficiently in javascript.When we work with a large number of elements, where we have to add event listeners to each elements, the concept of event delegation there helps us.Instead of attaching an individual event listener to each child element, a single event listener is attached to a common ancestor of the DOM tree.It uses the event bubbling process.As the events travels through its parent elements to the document root in bubbling phase the single event listener attached to the common parent catches this bubbled event.By using event.target process parent element identify the specific child element that originally triggered the event.
**Why is it useful**
1. It helps us to handle events more efficiently, especially when dealing with many elements.
2. Delegating event handling to a common ancestor element reduces the number of event listeners and improves performance and memory usage.
3. It simplifies the Code by maintaining central event listeners.
4. It automatically adds event listeners to dynamic data of DOM which load after initial page load.
5. It also adds event listeners to new create elements automatically.

---

## Answer to the question no. 5:
*the main difference between **preventDefault() and stopPropagation()** methods are:*

**preventDefault()**
1. This methods used to prevent the browsers default action related to specific event.
2. It controls the default behavior of an element itself when an event occur.
3. For example, it prevent form reload during form submission.

**stopPropagation()**
1. This method prevents a event to propagate in the capturing and bubbling phases.
2. It can prevent bubbling up phase from child element to parent element . Similarly in capturing phase it prevent the event from being handled by ancestor elements before it reaches the target.
3. It controls the flow of an event through the DOM tree.