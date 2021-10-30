# stimulus-checklist

A stimulus controller for checkboxes responding ctrl and shift click.

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

Filter checkboxes by css selctor:

```html
<ul data-controller="checklist"
    data-checklist-filter-value="input[type=checkbox]">
</ul>
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
