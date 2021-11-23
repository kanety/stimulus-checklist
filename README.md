# stimulus-checklist

A stimulus controller for checkbox list which responds to ctrl and shift click.

## Dependencies

* @hotwired/stimulus 3.0

## Installation

Install from npm:

    $ npm install @kanety/stimulus-checklist --save

## Usage

Register controller:

```javascript
import { Application } from '@hotwired/stimulus';
import ChecklistController from '@kanety/stimulus-checklist';

const application = Application.start();
application.register('checklist', ChecklistController);
```

Import css:

```css
@import '@kanety/stimulus-checklist';
```

Build html as follows:

```html
<ul data-controller="checklist">
  <li>
    <input type="checkbox">
    <span>text 1</span>
  </li>
  <li>
    <input type="checkbox">
    <span>text 2</span>
  </li>
</ul>
```

### Options

#### filter

Filter checkboxes by css selector:

```html
<ul data-controller="checklist"
    data-checklist-filter-value="input.first">
  <li>
    <input type="checkbox" class="first">
    <span>text 1</span>
    <input type="checkbox">
  </li>
</ul>
```

#### skip-tags

You can skip checking checkbox when clicked specific tags:

```html
<ul data-controller="checklist"
    data-checklist-skip-tags-value="span:last-child">
  <li>
    <input type="checkbox">
    <span>text 1</span><!-- checkbox will be checked when clicked first span -->
    <span>text 2</span><!-- checkbox will not be checked when clicked last span -->
  </li>
</ul>
```

You can also set globally as follows:

```javascript
ChecklistController.skipTags = 'a, input, select, textarea, button';
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
