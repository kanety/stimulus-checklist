import{Controller as e}from"@hotwired/stimulus";import"@kanety/stimulus-static-actions";class t extends e{get items(){return Array.from(this.element.children)}get checkboxes(){return this.scope.findAllElements(this.filterValue).filter(e=>!e.disabled)}check(e){if(!e.target.matches("input, select, textarea")){for(var t=e.target;t&&t.parentNode!=this.element;)t=t.parentNode;t&&this.update(t,e.shiftKey,e.ctrlKey)}}update(e,t,c){void 0===t&&(t=!1),void 0===c&&(c=!1);var s=this.current;t&&s?(this.uncheckAll(),this.checkBetween(s,e)):c?this.checkToggle(e):(this.uncheckAll(),this.checkItem(e),this.current=e)}uncheckAll(){this.checkboxes.forEach(e=>e.checked=!1)}checkItem(e){var t=this.checkboxAt(e);t&&(t.checked=!0)}checkToggle(e){var t=this.checkboxAt(e);t&&(t.checked=!t.checked)}checkBetween(e,t){var c=this.items,s=c.indexOf(e),i=c.indexOf(t);s>i&&([s,i]=[i,s]),c.slice(s,i+1).forEach(e=>{var t=this.checkboxAt(e);t&&(t.checked=!0)})}checkboxAt(e){var t=e.querySelector(this.filterValue);return t.disabled?null:t}disableUS(e){(e.ctrlKey||e.shiftKey)&&this.toggleUS(!1)}enableUS(e){(e.ctrlKey||e.shiftKey)&&this.toggleUS(!0)}toggleUS(e){this.disableUserSelect=!e,e?this.element.classList.remove("st-checklist--disable-us"):this.element.classList.add("st-checklist--disable-us")}preventUS(e){return!this.disableUserSelect}}t.values={filter:{type:String,default:"input[type=checkbox]"}},t.actions=[["element","click->check"],["element","mousedown->disableUS"],["element","mouseup->enableUS"],["element","userselect->preventUS"]];export{t as default};
//# sourceMappingURL=index.module.js.map
