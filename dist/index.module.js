import{Controller as e}from"@hotwired/stimulus";import"@kanety/stimulus-static-actions";class t extends e{get items(){return Array.from(this.element.children)}get checkboxes(){return this.scope.findAllElements(this.filterValue).filter(e=>!e.disabled)}check(e){var t=e.target;if(t!=this.element){for(;t&&t.parentNode!=this.element;){if(t.matches(this.constructor.skipTags))return;t=t.parentNode}t&&this.update(t,e.shiftKey,e.ctrlKey)}}update(e,t,s){void 0===t&&(t=!1),void 0===s&&(s=!1);var c=this.current;t&&c?(this.uncheckAll(),this.checkBetween(c,e)):s?this.checkToggle(e):(this.uncheckAll(),this.checkItem(e),this.current=e)}uncheckAll(){this.checkboxes.forEach(e=>e.checked=!1)}checkItem(e){var t=this.checkboxAt(e);t&&(t.checked=!0)}checkToggle(e){var t=this.checkboxAt(e);t&&(t.checked=!t.checked)}checkBetween(e,t){var s=this.items,c=s.indexOf(e),i=s.indexOf(t);c>i&&([c,i]=[i,c]),s.slice(c,i+1).forEach(e=>{var t=this.checkboxAt(e);t&&(t.checked=!0)})}checkboxAt(e){var t=e.querySelector(this.filterValue);return t.disabled?null:t}disableUS(e){(e.ctrlKey||e.shiftKey)&&this.toggleUS(!1)}enableUS(e){(e.ctrlKey||e.shiftKey)&&this.toggleUS(!0)}toggleUS(e){this.disableUserSelect=!e,e?this.element.classList.remove("st-checklist--disable-us"):this.element.classList.add("st-checklist--disable-us")}preventUS(e){return!this.disableUserSelect}}t.values={filter:{type:String,default:"input[type=checkbox]"}},t.actions=[["element","click->check"],["element","mousedown->disableUS"],["element","mouseup->enableUS"],["element","userselect->preventUS"]],t.skipTags="a, input, select, textarea, button";export{t as default};
//# sourceMappingURL=index.module.js.map
